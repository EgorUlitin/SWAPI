import { GET_FILMS, GET_PEOPLE, GET_PLANETS, GET_SPECIES, GET_STARSHIP, GET_VEHICLES } from './types';
import axios from 'axios';

export const getFilms = () => dispatch => {
        
    axios.get('https://swapi.co/api/films/')
    .then((films) => dispatch({
            type: GET_FILMS,
            payload: films.data.results
        })
    );
};