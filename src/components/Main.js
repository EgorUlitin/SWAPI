import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import Home from './Home';
import Film from './Film';
import People from './People';
import About from './About';
import Planet from './Planet';
import Chat from './ChatContainer';
import Starship from "./Starship";
import Species from "./Species";
import Vehicles from "./Vehicles";

class Main extends Component {
    render() {
        return (
            <main>
                <Provider store={store}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/films' component={Film}/>
                        <Route path='/people' component={People}/>
                        <Route path='/chat' component={Chat}/>
                        <Route path='/planets' component={Planet}/>
                        <Route path='/starships' component={Starship}/>
                        <Route path='/species' component={Species}/>
                        <Route path='/vehicles' component={Vehicles}/>
                    </Switch>
                </Provider>
            </main>
        );
    }
}

export default Main;
