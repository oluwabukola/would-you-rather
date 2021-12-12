export const SET_AUTH_USER = 'SET_AUTH_USER';
export const RESET_AUTH_USER = 'RESET_AUTH_USER';



export function setAuthUser (user) {
    
    return {
        type:SET_AUTH_USER,
        authedUser:user
    };
}

export function resetAuthUser () {
    return {
        type: RESET_AUTH_USER,
        authedUser: null
    };
}