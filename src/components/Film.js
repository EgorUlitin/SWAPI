import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getFilms } from '../actions/filmActions';
import store from '../store/store.js';

class Film extends Component {
    componentWillMount() {
        this.props.getFilms();
    }

    render() {
        
        const filmsItems = this.props.films.map((film, index) => (
            <Link to={`/films/${index}`}>
                <ListGroupItem
                href='#'>{film.title}
                </ListGroupItem>
            </Link>));

        return (
            <div className="">
                <ListGroup className='filmlist'>
                    {filmsItems}
                </ListGroup>
            </div>
        )
    }
}

Film.propTypes = {
    getFilms: PropTypes.func.isRequired,
    films: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    films: state.films.items
});

export default connect(mapStateToProps, { getFilms })(Film);
