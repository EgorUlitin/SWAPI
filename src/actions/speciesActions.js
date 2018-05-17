import { GET_SPECIES } from './types';
import axios from 'axios';

export const getSpecies = () => dispatch => {
        
    axios.get('https://swapi.co/api/species/')
    .then((species) => dispatch({
            type: GET_SPECIES,
            payload: species.data.results
        })
    );
};