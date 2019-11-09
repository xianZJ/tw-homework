import React from 'react';
import './nav.scss';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [{
                "name": "Dashboard",
                "icon": "icon-dashboard"
            }, {
                "name": "Agent",
                "icon": "icon-sitemap",
                "isActive":true
            }, {
                "name": "MY CRUISE",
                "icon": "icon-boat",
            }, {
                "name": "HELP",
                "icon": "icon-life-bouy",
            }
            ]
        }
    }

    render() {
        let lis = this.state.menu.map((item, index) => {
            return <li className={'nav-menu ' + (item.isActive?"active":"")} key={index}>
                <a>
                    <i className={'fs20 '+ item.icon }></i>
                    <span >{item.name}</span>
                </a>
            </li>
        });
        console.log('list= ', lis)
        return (
            <ul className="nav-menu">
                {lis}
            </ul>
        )
    }
}

export default Nav;