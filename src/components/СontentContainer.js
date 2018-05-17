import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

export default class СontentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                'films',
                'people',
                'planets',
                'species',
                'starships',
                'vehicles'
            ]
        }
    }

    render() {
        return (
            <Row className='App'>
                {this.state.categories.map(cat => <Link to={cat}>
                    <Col className={'CategoriesList'+ ' ' + cat}>
                        <h2>{cat}</h2>
                    </Col>
                </Link>)}
            </Row>
        )
    }
}