import React from 'react';
import _ from 'underscore'
import  './history.less';
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
            return <div key={index}>{item.text}</div>
        });
        console.log('list= ', list)
        return (
            <div>
                {list}
            </div>
        )
    }
}
export default History;