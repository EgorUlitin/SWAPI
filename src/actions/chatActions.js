import { ADD_MESSAGE, ADD_USER, MESSAGE_RECEIVED, USER_LIST } from './types';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) =>(dispatch)=> {
        dispatch({
            type: ADD_MESSAGE,
            id: nextMessageId++,
            message,
            author
        })
        action.author = params.username
        params.socket.send(JSON.stringify(action))
});

export const addUser = name => ({
    type: ADD_USER,
    id: nextUserId++,
    name
});

export const messageReceived = (message, author) => ({
   type: MESSAGE_RECEIVED,
   id: nextMessageId++,
   message,
   author
});

export const populateUsersList = users => ({
    type: USER_LIST,
    users
});
