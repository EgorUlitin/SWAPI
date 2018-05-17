import { GET_PLANETS } from './types';
import axios from 'axios';

export const getPlanets = () => dispatch => {
        
    axios.get('https://swapi.co/api/planets/')
    .then((planets) => dispatch({
            type: GET_PLANETS,
            payload: planets.data.results
        })
    );
};