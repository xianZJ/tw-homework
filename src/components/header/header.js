import React from 'react';
import './header.scss'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }

    onClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    };

    render(){
        return(
            <header className="header">
                <a className="header-logo"></a>
                <div className="header-info">
                    <i onClick={ this.onClick} className={"header-info-arrow " + (this.state.isShow?"icon-angle-up":"icon-angle-down")}>
                    </i>
                    <span className="header-info-avatar"  />
                    <ul className={this.state.isShow?"show":"hide"}>
                        <li className="" onClick={this.onClick}>
                            <a ><i className="icon-id-card"></i> Profile</a>
                        </li>
                        <li className="" onClick={this.onClick}>
                            <a ><i className="icon-sign-in"></i> Sign Out</a>
                        </li>
                    </ul>
                </div>

            </header>
        )
    }
}

export default Header