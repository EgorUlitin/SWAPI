import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/vehicles/').then(res => {
            this.setState({vehicles: res.data.results});
            console.log(this.state.vehicles);
        });

    }


    render() {
        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {this.state.vehicles.map((vehicle, index) => <Link to={`/vehicles/${index}`}><ListGroupItem
                        href='#'>{vehicle.name}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}

export default Vehicles;
