import React from 'react';
import { Poll } from './Poll';
import { selectQuestionById } from '../Formatted';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router';

export const QuestionPoll = () => {
    const { id } = useParams();
const question = useSelector(selectQuestionById(id));
if(!question) return <Redirect to="/NotFound"/>;
    return (
        <div>
           <Poll question={question} /> 
        </div>
    )
}
