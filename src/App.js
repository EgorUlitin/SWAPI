import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import СontentContainer from "./components/СontentContainer";


const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
