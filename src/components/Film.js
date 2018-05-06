import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/films/').then(res => {
            this.setState({films: res.data.results});
            console.log(this.state.films);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='filmlist'>
                    {this.state.films.map((film, index) => <Link to={`/films/${index}`}><ListGroupItem
                        href='#'>{film.title}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}

export default Film;
