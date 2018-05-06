import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peopls: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/').then(res => {
            this.setState({peopls: res.data.results});
            console.log(this.state.peopls);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='pepolelist'>
                    {this.state.peopls.map((people, index) => <Link to={`/people/${index}`}><ListGroupItem
                        href='#'>{people.name}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}

export default People;
