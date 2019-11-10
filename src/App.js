import React from 'react';
import './App.scss';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import History from './components/history/history'
import Card from './components/card/card'
import Filter from './components/filter/filter'
import List from './components/list/list'
import Modal from './components/modal/modal'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false, // modal的显示隐藏
            filterType: 0,     //tab过滤条件
            filterText: '',    //input过滤条件
            filterIcon: 0,     //icon过滤条件
            listData: [],     //list数据
        }
    }

    onStateChange = (obj) => {
        console.log('obj = ',obj)
        this.setState(obj,function(){
            console.log('app this.state',this.state)
        });
    };

    render() {
        return (
            <div className="App" >
                <div onClick={ () => {
                    this.onStateChange({
                        isShowModal:!this.state.isShowModal
                    })
                }} className={'App-modal-mask ' + (this.state.isShowModal ? 'show':'hide')}></div>
                <Modal onStateChange={this.onStateChange} isShowModal={this.state.isShowModal}/>
                <Header avatar=""/>
                <aside className="App-left-side">
                    <i onClick={()=>{
                        let dom = document.getElementsByClassName('App-left-side')[0];
                        dom.style.display = 'none';
                    }} className="close-left-side fs24 icon-close" />
                    <Nav className="App-left-side-nav"></Nav>
                    <History className="App-left-side-history"/>
                </aside>
                <section className="App-section">
                    <div className="App-section-overview">
                        <Card text="Building" type="type1" number="4"/>
                        <Card text="Idle" type="type2" number="6"/>
                        <Card className="card-overview">
                            <div>
                                <span>All</span>
                                <p>8</p>
                            </div>
                            <div>
                                <span>PHYSICAL</span>
                                <p>4</p>
                            </div>

                            <div>
                                <span>VIRTUAL</span>
                                <p>4</p>
                            </div>
                        </Card>
                    </div>
                    <Filter onStateChange={this.onStateChange}></Filter>
                    <List onStateChange={this.onStateChange}></List>
                </section>
                <footer className="App-footer">
                    © Copyright 2017 ThoughtWorks
                </footer>
            </div>
        );
    }
}

export default App;
