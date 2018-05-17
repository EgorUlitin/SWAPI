import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPlanets } from '../actions/planetsActions';
import store from '../store/store.js';

class Planet extends Component {
    componentWillMount() {
        this.props.getPlanets();
    }

    render() {
        
        const planetItems = this.props.planets.map((planet, index) => 
            <Link to={`/planets/${index}`}>
                <ListGroupItem
                href='#'>{planet.name}
                </ListGroupItem>
            </Link>)

        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {planetItems}
                </ListGroup>
            </div>
        )
    }
}

Planet.propTypes = {
    getPlanets: PropTypes.func.isRequired,
    planets: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    planets: state.planets.items
});

export default connect(mapStateToProps, { getPlanets })(Planet);
