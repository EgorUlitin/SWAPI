import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Starship extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starships: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/starships/').then(res => {
            this.setState({starships: res.data.results});
            console.log(this.state.starships);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {this.state.starships.map((starship, index) => <Link to={`/starships/${index}`}><ListGroupItem
                        href='#'>{starship.name}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}

export default Starship;
