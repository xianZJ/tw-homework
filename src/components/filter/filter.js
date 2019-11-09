import './filter.scss';
import React from 'react';
import Tab from '../tab/tab';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    name: 'All',
                    value: 0
                },
                {
                    name: 'Physical',
                    value: 1
                },
                {
                    name: 'Virtual',
                    value: 2
                }
            ],
            text: '',
            selectIcon:0
        }
    }

    onSelected = (value) => {
        this.setState({
            selectIcon: value
        })
    };

    render() {
        return (
            <div className="App-section-filter">
                <Tab menu={this.state.menu}></Tab>
                <div className='filter-text'>
                    <input placeholder="" maxLength={10}/>
                    <i className='fs20 icon-search'></i>
                </div>
                <div className="filter-icon">
                    <i onClick={ () => { this.onSelected(0) }} className={"fs24 icon-th-card " + (this.state.selectIcon ? "":"selected")}></i>
                    <i onClick={ () => { this.onSelected(1) }} className={"fs24 icon-th-list " + (this.state.selectIcon ? "selected":"")}></i>
                </div>
            </div>
        )
    }
}

export default Filter;