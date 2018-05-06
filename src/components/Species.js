import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/species/').then(res => {
            this.setState({species: res.data.results});
            console.log(this.state.species);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {this.state.species.map((specie, index) => <Link to={`/species/${index}`}><ListGroupItem
                        href='#'>{specie.name}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}

export default Species;
