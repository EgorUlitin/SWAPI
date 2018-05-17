import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVehicles } from '../actions/vehiclesActions';
import store from '../store/store.js';

class Vehicles extends Component {
    componentWillMount() {
        this.props.getVehicles();
    }

    render() {
        const vehiclesItems = this.props.vehicles.map((vehicle, index) => 
            <Link to={`/vehicles/${index}`}>
                <ListGroupItem
                    href='#'>{vehicle.name}
                </ListGroupItem>
            </Link>)
        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {vehiclesItems}
                </ListGroup>
            </div>
        )
    }
}

Vehicles.PropTypes = {
    getVehicles: PropTypes.func.isRequired,
    vehicles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    vehicles: state.vehicles.items
})

export default connect (mapStateToProps, { getVehicles })(Vehicles);
