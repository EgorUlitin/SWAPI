import { GET_FILMS, GET_PEOPLE, GET_PLANETS, GET_SPECIES, GET_STARSHIP, GET_VEHICLES } from './types';
import axios from 'axios';

export const getPlanets = () => dispatch => {
        
    axios.get('https://swapi.co/api/planets/')
    .then((planets) => dispatch({
            type: GET_PLANETS,
            payload: planets.data.results
        })
    );
};