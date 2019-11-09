import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit: 10,
            isNoMore: true,
            total: this.getData().length,
            data: this.getData(),
            loading: true,
            ...props
        }
    }

    getData = () => {
        return [{
            id: 1,
            logo: './assets/osicons/windows.png',
            title: 'bjstdmngbgr01.thoughworks.com',
            tag: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
            deny: false
        }, {
            id: 2,
            logo: './assets/osicons/windows.png',
            title: 'bjstdmngbgr08.thoughworks.com',
            tag: 'building',
            ip: '192.168.1.243',
            path: '/var/lib/cruise-agent',
            opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
            deny: true
        }, {
            id: 3,
            logo: './assets/osicons/ubuntu.png',
            title: 'bjstdmngbgr10.thoughworks.com',
            tag: 'building',
            ip: '192.168.1.80',
            path: '/var/lib/cruise-agent',
            opts: ['Firefox', 'Safari'],
            deny: true
        }, {
            id: 4,
            logo: './assets/osicons/debin.png',
            title: 'bjstdmngbgr11.thoughworks.com',
            tag: 'building',
            ip: '192.168.1.117',
            path: '/var/lib/cruise-agent',
            opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
            deny: true
        }, {
            id: 5,
            logo: './assets/osicons/suse.png',
            title: 'bjstdmngbgr15.thoughworks.com',
            tag: 'idle',
            ip: '192.168.1.110',
            path: '/var/lib/cruise-agent',
            opts: [],
            deny: false
        }, {
            id: 6,
            logo: './assets/osicons/cent_os.png',
            title: 'bjstdmngbgr01.thoughworks.com',
            tag: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            opts: ['Firefox', 'Safari', 'Ubuntu', 'Chrome'],
            deny: false
        }]

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
                <div>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.log}/>
                                    <div>
                                        <i className="211"></i>
                                        <span className="111">{item.title}</span>
                                    </div>
                                    <div>
                                        <span>{item.tag}</span>
                                    </div>
                                    <div>
                                        <i className="111"/>
                                        <span>{item.ip}</span>
                                    </div>
                                    <div>
                                        <i className="111"></i>
                                        <span>{item.path}</span>
                                    </div>
                                    <div>
                                        <i className="111"/>
                                        {
                                            item.opts.map((opt, ind) => {
                                                return (
                                                    <div key={index + '' + ind}>
                                                        <span></span>
                                                        <i className="icon-trash"/>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div></div>
                                    </div>
                                    <div>
                                        <i className='112'/>
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