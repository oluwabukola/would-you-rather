export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const SET_USER = 'SET_USER';


export function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

export function addAnswer (answer) {
    return {
        type: ADD_ANSWER,
        payload: answer
    }
}
