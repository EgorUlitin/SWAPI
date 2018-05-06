import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import App from '../App';
import About from './About';
import Main from './Main';
import Film from './Film';
import СontentContainer from './СontentContainer';





class Home extends Component {
    render() {
        return (
            <div>
                <СontentContainer />
            </div>
        )
    }
}

export default Home;
