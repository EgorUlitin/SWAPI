import { GET_STARSHIP } from './types';
import axios from 'axios';

export const getStarship = () => dispatch => {
        
    axios.get('https://swapi.co/api/starships/')
    .then((starship) => dispatch({
            type: GET_STARSHIP,
            payload: starship.data.results
        })
    );
};