import {createSelector} from 'reselect';

const selectAllUsers = state => state.users;
const selectAllQuestion = state => state.questions;


export const selectAuthenticatedUser = state => state.authedUser;

export const questionsById = (id) => createSelector(selectAllQuestion, (questions) => {
    const answeredQuestions = [];
    const unansweredQuestions = [];
    Object.keys(questions).forEach(questionId => {
        const {optionOne, optionTwo } = questions[questionId];
        if(optionOne.votes.includes(id) || optionTwo.votes.includes(id)){
            answeredQuestions.push(questions[questionId]);
        }else {
            unansweredQuestions.push(questions[questionId]);

        }
    });
    return {
        answeredQuestions: answeredQuestions.sort((a, b) => b.timestamp - a.timestamp),
        unansweredQuestions: unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
    };
});


export const selectUsersInfo = createSelector (selectAllUsers, (users) => {
    
    const newUsers = Object.keys(users).reduce((acc, current) => {
        const {name, id, avatarURL, answers } = users[current];
        acc[current] = {name, id, avatarURL, answers};
        return acc;
    }, {});
    return newUsers;
});

export const selectQuestionById = (id) => createSelector (selectAllQuestion, (questions)=>{
    const question = questions[id];
    return question;
});



// Select users by Id
export const selectUserById = (id) => createSelector(selectAllUsers, users => (users[id])); 

export const selectOptionsForQuestions = (id) => createSelector(selectQuestionById(id),
    question => {
        return {options: [question.optionOne, question.optionTwo], 
            voteCount: question.optionOne.votes.length + question.optionTwo.votes.length };
    });


    export const selectNewUsers = () => createSelector(selectAllUsers, users => {
        const values = Object.values(users);
        const formattedUsers = values.reduce((acc, current) => {
            const totalScore = current.questions.length + Object.keys(current.answers).length;
            current.totalScore = totalScore;
            acc.push(current);
            return acc;
        }, []);
        return formattedUsers.sort((a,b) => b.totalScore - a.totalScore);
        } );