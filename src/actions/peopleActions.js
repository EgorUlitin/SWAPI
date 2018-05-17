import { GET_FILMS, GET_PEOPLE, GET_PLANETS, GET_SPECIES, GET_STARSHIP, GET_VEHICLES } from './types';
import axios from 'axios';

export const getPeople = () => dispatch => {
        
    axios.get('https://swapi.co/api/people/')
    .then((people) => dispatch({
            type: GET_PEOPLE,
            payload: people.data.results
        })
    );
};