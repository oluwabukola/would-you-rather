import { SET_AUTH_USER, RESET_AUTH_USER } from '../actions/authedUser';

export default function authReducer (state = null, action) {
    
    switch (action.type) {
        case SET_AUTH_USER:
            return action.authedUser
        case RESET_AUTH_USER:
            return null;
        default:
            return state;
       
    }
}