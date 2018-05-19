import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import setupSocket from '../sockets';
import handleNewMessage from '../sagas';
import username from '../utils/name';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username})

export default store; 