import './card.less';
import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.children){
            return this.props.children;
        }else{
            return (
                <div>
                    <span>{this.props.text}</span>
                    <img src={this.props.img} />
                    <span>{this.props.number}</span>
                </div>
            )
        }
    }
}
export default Card;