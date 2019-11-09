import React from 'react';
import './App.scss';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import History from './components/history/history'
import Card from './components/card/card'
import Filter from './components/filter/filter'
import List from './components/list/list'
function App() {

    return (
        <div className="App">
            <Header  avatar=""/>
            <aside className="App-left-side">
                <Nav className="App-left-side-nav"></Nav>
                <History className="App-left-side-history"/>
            </aside>
            <section className="App-section">
                <div className="App-section-overview">
                    <Card text="Building" type="type1"  number="4" />
                    <Card text="Idle" type="type2"  number="6" />
                    <Card className="card-overview">
                        <div >
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
                <Filter ></Filter>
                <List ></List>
            </section>
        </div>
    );
}

export default App;
