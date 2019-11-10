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
            filterText: '',
            filterType:0,
            filterIcon:0,
            ...props
        }
    }

    onSelected = (value) => {
        this.setState({
            filterIcon: value
        },() => {
            // 触发父组件过滤条件更新
            this.state.onStateChange(this.state);
        });
    };
    
    onSelectTab = (value) => {
        this.setState({
            filterType: value
        },() => {
            // 触发父组件过滤条件更新
            this.state.onStateChange(this.state);
        });
    };

    onInputChange = (event) => {
        this.setState({
            filterText: event.target.value
        },() => {
            // 触发父组件过滤条件更新
            this.state.onStateChange(this.state);
        });
    };

    render() {
        return (
            <div className="App-section-filter">
                <Tab onSelectTab={this.onSelectTab}  menu={this.state.menu}></Tab>
                <div className='filter-text'>
                    <input placeholder="" onChange={this.onInputChange}  maxLength={10}/>
                    <i className='fs20 icon-search'></i>
                </div>
                <div className="filter-icon">
                    <i onClick={ () => { this.onSelected(0) }} className={"fs24 icon-th-card " + (this.state.filterIcon ? "":"selected")}></i>
                    <i onClick={ () => { this.onSelected(1) }} className={"fs24 icon-th-list " + (this.state.filterIcon ? "selected":"")}></i>
                </div>
            </div>
        )
    }
}

export default Filter;