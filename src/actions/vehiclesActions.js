import { GET_VEHICLES } from './types';
import axios from 'axios';

export const getVehicles = () => dispatch => {
        
    axios.get('https://swapi.co/api/vehicles/')
    .then((vehicles) => dispatch({
            type: GET_VEHICLES,
            payload: vehicles.data.results
        })
    );
};