import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>React Star Wars API</h1>
                <ul class="btn from-middle" role="nav">
                    <li className='btn from-middle'>
                        <Link to="/"><Button bsSize="large">Home</Button></Link>
                    </li>
                    <li className=''>
                        <Link to="/about"><Button bsSize="large">About</Button></Link>
                    </li>
                </ul>
            </div>
        )
    }
}