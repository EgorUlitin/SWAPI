import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Film from './Film';
import People from './People';
import About from './About';
import Planet from './Planet';
import App from '../App';
import Starship from "./Starship";
import Species from "./Species";
import Vehicles from "./Vehicles";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/films' component={Film}/>
                    <Route path='/people' component={People}/>
                    <Route path='/about' component={About}/>
                    <Route path='/planets' component={Planet}/>
                    <Route path='/starships' component={Starship}/>
                    <Route path='/species' component={Species}/>
                    <Route path='/vehicles' component={Vehicles}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
