import { GET_VEHICLES } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLES: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
}