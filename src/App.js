import React from 'react';
import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import History from './components/history/history'
import Card from './components/card/card'
function App() {
    return (
        <div className="App">
            <Header className="App-header" avatar=""/>
            <aside className="App-left-side">
                <Nav className="App-left-side-nav"></Nav>
                <History className="App-left-side-history"/>
            </aside>
            <section className="App-section">
                <div className="App-section-overview">
                    <Card text="Building"  number="4" />
                    <Card text="Idle"  number="6" />
                    <Card >
                        <div>
                            <span>All</span>
                            <span>8</span>
                        </div>
                        <div>
                            <span>PHYSICAL</span>
                            <span>4</span>
                        </div>

                        <div>
                            <span>VIRTUAL</span>
                            <span>4</span>
                        </div>
                    </Card>
                </div>

                <div className="App-section-filter">

                </div>

                <div className="App-section-list">

                </div>
            </section>
        </div>
    );
}

export default App;
