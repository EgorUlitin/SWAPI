import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { ListGroup, ListGroupItem}  from 'react-bootstrap';
import { connect } from 'react-redux';
import { getSpecies } from '../actions/speciesActions';
import store from '../store/store.js';

class Species extends Component {
    
    componentWillMount() {
        this.props.getSpecies();
    } 


    render() {
        const speciesItems = this.props.species.map((specie, index) => 
            <Link to={`/species/${index}`}>
                <ListGroupItem
                href='#'>{specie.name}
                </ListGroupItem>
            </Link>)

        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {speciesItems}
                </ListGroup>
            </div>
        )
    }
}

Species.PropTypes = {
    getSpecies: PropTypes.func.isRequired,
    species: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    species: state.species.items
})

export default connect (mapStateToProps, { getSpecies })(Species);
