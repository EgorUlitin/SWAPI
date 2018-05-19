import { ADD_USER, USER_LIST } from '../actions/types';

const initialState = [];

 const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return state.concat([
                { name: action.name, id: action.id }
            ])
        }
        case USER_LIST: {
            return action.users
        }
        default:
            return state
    }
};

export default users;
