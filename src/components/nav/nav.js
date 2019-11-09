import React from 'react';
import './nav.less';
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: [{
                   "name":"Dashboard",
                   "icon":"",
                   "":"",
                },{
                  "name":"Agent",
                  "icon":"",
                },{
                  "name":"MY CRUISE",
                  "icon":"",
                },{
                  "name":"HELP",
                  "icon":"",
                }
            ]
        }
    }
     render(){
         let lis = this.state.menu.map((item,index) => {
             return <li key={index}>{item.name}</li>
         });
         console.log('list= ', lis)
        return (
            <ul>
                {lis}
            </ul>
        )
     }
}
export default Nav;