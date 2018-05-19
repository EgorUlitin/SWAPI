import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import { routerReducer } from 'react-router-redux';
import peopleReducer from './peopleReducer';
import planetReducer from './planetReducer';
import speciesReducer from './speciesReducer';
import starshipReducer from './starshipReducer';
import vehiclesReducer from './vehiclesReducer';
import messages from './messagesReducer';
import users from './usersReducer';

export default combineReducers({
    routing: routerReducer,
    films: filmReducer,
    people: peopleReducer,
    planets: planetReducer,
    species: speciesReducer,
    starship: starshipReducer,
    vehicles: vehiclesReducer,
    messages,
    users
 });