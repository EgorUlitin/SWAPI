import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/store.js';


//const history = createBrowserHistory();



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <Header />
            <Main />
        </div>
      </Provider>  
    );
  }
}

export default App;
