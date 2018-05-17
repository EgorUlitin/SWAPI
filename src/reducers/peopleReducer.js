import { GET_PEOPLE } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLE: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
}