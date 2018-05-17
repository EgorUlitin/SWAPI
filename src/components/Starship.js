import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getStarship } from '../actions/starshipsActions';
import store from '../store/store.js';

class Starship extends Component {
    componentWillMount() {
        this.props.getStarship();
    }

    render() {
        const starship = this.props.starship.map((starship, index) => <Link to={`/starships/${index}`}><ListGroupItem
        href='#'>{starship.name}</ListGroupItem></Link>)

        return (
            <div className="">
                <ListGroup className='planetlist'>
                    {starship}
                </ListGroup>
            </div>
        )
    }
}

Starship.PropTypes = {
    getStarship: PropTypes.func.isRequired,
    starship: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    starship: state.starship.items
})

export default connect (mapStateToProps, { getStarship })(Starship);
