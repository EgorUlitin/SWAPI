import { GET_PEOPLE } from './types';
import axios from 'axios';

export const getPeople = () => dispatch => {
        
    axios.get('https://swapi.co/api/people/')
    .then((people) => dispatch({
            type: GET_PEOPLE,
            payload: people.data.results
        })
    );
};