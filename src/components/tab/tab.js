import './tab.scss';
import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        console.log('props = ', props)
        this.state = {
            filterType: 0,
            ...props
        }
    }

    onSelected = (value,) => {
        console.log('value = ',value)
        this.setState({
            filterType: value
        },() =>{
            this.state.onSelectTab(value);
        })
    };

    render() {

        return (
            <div className="tab-item">
                {this.state.menu.map((item, index) => {
                    return <span onClick={ () => { this.onSelected(item.value)}}
                                 data-value={item.value}
                                 className={(this.state.filterType === item.value ? "selected" : "")}
                                 key={index}>{item.name}</span>
                })}
            </div>
        )

    }
}

export default Tab;