import { GET_PLANETS } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PLANETS: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
}