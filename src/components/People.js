import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPeople } from '../actions/peopleActions';
import store from '../store/store.js';


class People extends Component {
    componentWillMount() {
        this.props.getPeople();
    }

    render() {
        const peopleItems = this.props.people.map((people, index) => 
            <Link to={`/people/${index}`}>
                <ListGroupItem
                    href='#'>{people.name}
                </ListGroupItem>
            </Link>);

        return (
            <div className="">
                <ListGroup className='pepolelist'>
                    {peopleItems}
                </ListGroup>
            </div>
        )
    }
}

People.propTypes = {
    getPeople: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    people: state.people.items
});

export default connect(mapStateToProps, { getPeople })(People);
