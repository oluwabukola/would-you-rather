import { GET_USERS, ADD_ANSWER, SET_USER} from "../actions/users";
import  {UPDATE_QUESTION} from '../actions/questions';



export default function users ( state = {}, action ) {
    // const{type, payload} = action;
    
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
            case SET_USER:
                return {
                    ...state,
                    ...action.user
                };
            case ADD_ANSWER:
                return {
                    ...state,
                    [action.payload.authedUser]:{
                    ...state[action.payload.authedUser],
                    answers: { ...state[action.payload.authedUser].answers,
                         ...{[action.payload.qid]: action.payload.answer}}
                    }
                };
            case UPDATE_QUESTION:
                return {
                    ...state,
                    [action.payload.authedUser]:{
                    ...state[action.payload.authedUser],
                    questions: 
                    [...state[action.payload.authedUser].questions,
                    action.payload.question]
                    }
                }
        
            default:
                return state;
    }
}