import { GET_FILMS } from './types';
import axios from 'axios';

export const getFilms = () => dispatch => {
        
    axios.get('https://swapi.co/api/films/')
    .then((films) => dispatch({
            type: GET_FILMS,
            payload: films.data.results
        })
    );
};