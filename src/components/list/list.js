import React from 'react';
import './list.scss'
import _ from 'underscore';
import {getList} from "../../api/agent";

const fromMock = true;

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 后台分页相关配置项
            // page: 1,
            // limit: 10,
            // isNoMore: true,
            total: 6,
            data: [{
                id: 1,
                logo: 'windows.png',
                title: 'bjstdmngbgr01.thoughworks.com',
                tag: 'idle',
                ip: '192.168.1.102',
                path: '/var/lib/cruise-agent',
                opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                deny: false
            }, {
                id: 2,
                logo: 'windows.png',
                title: 'bjstdmngbgr08.thoughworks.com',
                tag: 'building',
                ip: '192.168.1.243',
                path: '/var/lib/cruise-agent',
                opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                deny: true
            }, {
                id: 3,
                logo: 'ubuntu.png',
                title: 'bjstdmngbgr10.thoughworks.com',
                tag: 'building',
                ip: '192.168.1.80',
                path: '/var/lib/cruise-agent',
                opts: ['Firefox', 'Safari'],
                deny: true
            }, {
                id: 4,
                logo: 'debin.png',
                title: 'bjstdmngbgr11.thoughworks.com',
                tag: 'building',
                ip: '192.168.1.117',
                path: '/var/lib/cruise-agent',
                opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                deny: true
            }, {
                id: 5,
                logo: 'suse.png',
                title: 'bjstdmngbgr15.thoughworks.com',
                tag: 'idle',
                ip: '192.168.1.110',
                path: '/var/lib/cruise-agent',
                opts: [],
                deny: false
            }, {
                id: 6,
                logo: 'cent_os.png',
                title: 'bjstdmngbgr01.thoughworks.com',
                tag: 'idle',
                ip: '192.168.1.102',
                path: '/var/lib/cruise-agent',
                opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                deny: false
            }
            ],
            loading: true,
            ...props
        };
        console.log('state = ', this.state)
    }
    componentWillReceiveProps = (newProps) => {
        if( newProps.addItem && !newProps.isShowModal ){
            this.addItem(newProps.selectedId,newProps.addItem.split(','));
        }
    };
    componentDidMount = () =>{
        this.getData();
    };

    getData = () => {
         return
        if (!fromMock) {
            getList(_.omit(this.state, ['data', 'loading'])).then((res) => {
                this.setState({
                    data: _.map(res.data, function (item) {
                        return {
                            ...item,
                            testId: item.id //类似相关的数据处理工作
                        }
                    })
                })
                //如果是后台分页这块可以计算下啦刷新相关工作
            });
        } else {
            this.setState({
                data: [{
                        id: 1,
                        logo: 'windows.png',
                        title: 'bjstdmngbgr01.thoughworks.com',
                        tag: 'idle',
                        ip: '192.168.1.102',
                        path: '/var/lib/cruise-agent',
                        opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                        deny: false
                    }, {
                        id: 2,
                        logo: 'windows.png',
                        title: 'bjstdmngbgr08.thoughworks.com',
                        tag: 'building',
                        ip: '192.168.1.243',
                        path: '/var/lib/cruise-agent',
                        opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                        deny: true
                    }, {
                        id: 3,
                        logo: 'ubuntu.png',
                        title: 'bjstdmngbgr10.thoughworks.com',
                        tag: 'building',
                        ip: '192.168.1.80',
                        path: '/var/lib/cruise-agent',
                        opts: ['Firefox', 'Safari'],
                        deny: true
                    }, {
                        id: 4,
                        logo: 'debin.png',
                        title: 'bjstdmngbgr11.thoughworks.com',
                        tag: 'building',
                        ip: '192.168.1.117',
                        path: '/var/lib/cruise-agent',
                        opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                        deny: true
                    }, {
                        id: 5,
                        logo: 'suse.png',
                        title: 'bjstdmngbgr15.thoughworks.com',
                        tag: 'idle',
                        ip: '192.168.1.110',
                        path: '/var/lib/cruise-agent',
                        opts: [],
                        deny: false
                    }, {
                        id: 6,
                        logo: 'cent_os.png',
                        title: 'bjstdmngbgr01.thoughworks.com',
                        tag: 'idle',
                        ip: '192.168.1.102',
                        path: '/var/lib/cruise-agent',
                        opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
                        deny: false
                    }
                ]
            })
        }
    };

    delData = (index,index1) => {
         //如果是实际场景可以去发请求，重新拉取数据渲染dom即可
         let temp = this.state.data;
         _.map(temp,function(item,ind){
             if(ind === index) {
                 item.opts = _.filter(item.opts,function(item1,ind1){
                     return ind1 !== index1;
                 })
             }
         });
        this.setState({
            data: temp
        })
    };

    addItem = (index,data) =>{
        let temp = this.state.data;
        _.map(temp,function(item,ind){
            if(ind === index) {
                _.map(data,function(item1){
                   if(item.opts.indexOf(item1) < 0){
                       item.opts.push(item1);
                   }
                });
            }
        });
        this.setState({
            data: temp
        })
    };

    deneyData = () => {

    };

    render() {
        if (!this.state.total) {
            return (
                <div>
                    暂无数据
                </div>
            )
        } else {
            return (
                <div className="list-area">
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <div className={"list-item " + ('div'+ item.tag)} key={index}>
                                    <img className="list-item-logo"
                                         src={require(('../../assets/osicons/' + item.logo))}/>
                                    <div className="list-item-title">
                                        <i className="cp icon-desktop"></i>
                                        <span className="111">{item.title}</span>
                                    </div>
                                    <div className="list-item-tag">
                                        <span className={item.tag}>{item.tag}</span>
                                    </div>
                                    <div className="list-item-ip">
                                        <i className="fs16 icon-info"/>
                                        <span>{item.ip}</span>
                                    </div>
                                    <div className="list-item-path">
                                        <i className="fs16 icon-folder"></i>
                                        <span>{item.path}</span>
                                    </div>
                                    <p></p>
                                    <div className="list-item-action">
                                        <i onClick={() => {
                                            this.state.onStateChange({
                                                isShowModal: true,
                                                selectId: index
                                            })
                                        }} className="cp icon-plus"/>
                                        {
                                            item.opts.map((opt, ind) => {
                                                return (
                                                    <div onClick={()=>{
                                                        this.delData(index,ind)
                                                    }} key={index + '' + ind}>
                                                        <span>{opt}</span>
                                                        <i className="icon-trash"/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="fs14 list-item-deny">
                                        <i className='cp icon-deny'/>
                                        <span className="113">Deney</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
}

export default List;