import { _getUsers, _getQuestions,  _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { getUsers, addAnswer } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading';
import { getQuestions, addQuestion, updateQuestion } from "./questions";


export function GetUsers () {
    return (dispatch) => {
         dispatch(showLoading()) 
        return _getUsers()
        .then((users) => {
            dispatch(getUsers(users));
            // dispatch({type: GET_USERS, payload: {users}})
        
         dispatch(hideLoading());
        })
    }
};

export function GetQuestions () {
    return (dispatch) => {
        dispatch(showLoading()) 
        return _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        })
    }
};


export function SaveAnswers (answer) {
    return (dispatch) => {
    dispatch(showLoading())
        return _saveQuestionAnswer(answer)
        .then(() => {
            dispatch(addAnswer(answer));
        })
        .then(() => dispatch(hideLoading()))

            };
        };

export function AddQuestion ({question, authedUser}) {
    return (dispatch) => {
    dispatch(showLoading())
        return _saveQuestion(question)
        .then((formattedQuestion) => {
           
            dispatch(addQuestion(formattedQuestion));
            dispatch(updateQuestion({authedUser: authedUser.id, question: formattedQuestion.id}));
        })
        .then(() => dispatch(hideLoading()))
    };
};