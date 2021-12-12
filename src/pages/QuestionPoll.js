import React from 'react';
import { Poll } from './Poll';
import { selectQuestionById } from '../Formatted';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const QuestionPoll = () => {
    const { id } = useParams();

const question = useSelector(selectQuestionById(id));
    return (
        <div>
           <Poll question={question} /> 
        </div>
    )
}
