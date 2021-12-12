import { combineReducers } from 'redux';
import users from '../reducers/users';
import { loadingBarReducer } from 'react-redux-loading';
import authedReducer from '../reducers/authedReducer';
import questionReducer from '../reducers/questionReducer';




export default combineReducers ({
    authedUser: authedReducer,
    questions:questionReducer,
    users:users,
    loadingBar: loadingBarReducer 
})