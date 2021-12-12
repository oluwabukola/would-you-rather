export const GET_QUESTIONS = 'GET_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_FOR_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';


export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const voteForQuestion = (vote) => {
    return {
        type: VOTE_QUESTION,
        vote
    };
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const updateQuestion = (question) => {
    
    return {
        type: UPDATE_QUESTION,
        payload: question
    }
}

