import React from 'react';
import './header.less'
class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="header">
                <a className="header-logo">

                </a>
                <div className="header-info">
                    <img className="header-info-img" src={this.props.avator} />
                    <i className="header-info-i"></i>
                </div>
            </header>
        )
    }
}

export default Header