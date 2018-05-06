import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem, Table} from 'react-bootstrap';

class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/planets/').then(res => {
            this.setState({planets: res.data.results});
            console.log(this.state.planets);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {this.state.planets.map((planet, index) => <Link to={`/planets/${index}`}><ListGroupItem
                        href='#'>{planet.name}</ListGroupItem></Link>)
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Planet;
