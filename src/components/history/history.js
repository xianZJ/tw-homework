import React from 'react';
import _ from 'underscore'
import './history.scss';
class History extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:_.map(_.range(10),function(item){
                return {
                    id: '00000000'+ item,
                    text: 'bjstdmnbgr0'+ item +'/Acceptance_test'
                }
            })
        }
    }
    render(){
        let list = this.state.list.map((item,index) => {
            return <li className="fs12" key={index}>{item.text}</li>
        });
        console.log('list= ', list)
        return (
            <div className="history">
                <span className="f24">History</span>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
export default History;