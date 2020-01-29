import React, {Component} from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer/Footer';
import logo from './Tesla_Motors_Logo.svg';
class App extends Component {
  constructor () {
    super()
;    const leftList = ['model-s', 'model-x', 'model-y', 'model-3', 'cyber-truck'];
    const rightList = ['Solar roof', 'Power wall', 'super charger']
    this.state = {
      leftList,
      rightList
    }
  }
  render() {
    const { leftList, rightList } = this.state;
    return (
      <section
       className="App">
        <header className="App-header">
            <img alt="tesla" aria-label="tesla" className="logo" src={logo}/>
            <h1 className="title">{`Welcome to Tesla`}</h1>
        </header>
        <main className="Main-content">
          <MainContent
            leftList={leftList}
            rightList={rightList}
          />
        </main>
        <footer>
          <Footer className="Footer"/>
        </footer>
      </section>
    );
  }
}

export default App;
