import { GET_FILMS, GET_PEOPLE, GET_PLANETS, GET_SPECIES, GET_STARSHIP, GET_VEHICLES } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FILMS: {
            return {
                ...state,
                items: action.payload
            };
        } 
        default:
            return state;
    }
}