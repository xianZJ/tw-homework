import './card.scss';
import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        if(this.props.children){
            return (
                <div className="card1">
                    {this.props.children}
                </div>
            )
        }else{
            return (
                <div className={'card '+ this.props.type}>
                    <span className="fs24 card-status">{this.props.text}</span>
                    <span className={"card-icon " + (this.props.type==='type1'?"icon-cog":"icon-coffee")} />
                    <span className="fs48 card-num">{this.props.number}</span>
                </div>
            )
        }
    }
}
export default Card;