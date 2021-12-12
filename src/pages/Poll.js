import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux';
import { SaveAnswers } from '../actions/action';
import { voteForQuestion } from '../actions/questions';
import { selectUserById, selectAuthenticatedUser, selectOptionsForQuestions } from '../Formatted';

export const Poll = ({question}) => {
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(true);

    const { id } = useParams();
    
    console.log(question);
    const request= useSelector(selectUserById(question.author)); 
    const {options,  voteCount} = useSelector(selectOptionsForQuestions(id));
    const author = useSelector(selectAuthenticatedUser);
    const [buttonVal, setButtonVal] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const totalVotes = options.reduce((acc, current) => {
        return acc.concat(current.votes)
    }, []);
    


    useEffect(() => {
        if(totalVotes.includes(author.id)){
            setIsAnswered(true);
        }
        });
       

        const handleSubmit = (e) => {
            e.preventDefault();
       
            dispatch(SaveAnswers({authedUser: author.id, qid: question.id, 
               answer:buttonVal}));
            dispatch(voteForQuestion({authedUser: author.id, qid: id,
                answer: buttonVal}));
           }
    return (
        <div >
           { !isAnswered ? <h1>Qustion poll</h1> : <h1>Result</h1> }

            <div className='poll' >

               <p className='questions__content-name'>{!isAnswered ? `${request.name} asks:` : `Asked by ${request.name}`}</p>
                <hr />
                <div className='questions__content--sub'>
                    <div className='sub-left'>
                        <img  src={author.avatarURL}  alt='profile image' style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className='sub__right'>
                        
                              {
                                !isAnswered ?
                        <>
                        <h5 className='sub__right-text'>Would you rather</h5>
                        <form className='poll-form'  onSubmit={handleSubmit}>
                                <div >
                                <label>                                
                                <input 
                                    type="radio"
                                    name="option"
                                    value="optionOne"
                                    onChange={e => setButtonVal(
                                        e.target.value,
                                        setDisable(false)
                                        )}
                                    
                                />
                                &nbsp;
                                {question.optionOne.text}
                                
                                </label>
                                </div>
                                <div>
                                <label>                                
                                <input 
                                    type="radio"
                                    name="option"
                                    value="optionTwo"
                                    onChange={e => setButtonVal(e.target.value,
                                        setDisable(false))}
                                    
                                />
                                &nbsp;
                                {question.optionTwo.text}
                                
                                </label>
                                </div>
                                <button className='viewpoll' type="submit">Vote</button>
                                </form>
                                </>
                                :
                                    <div className="vote__sub" >
                                     <div className="vote__result">vote result </div>
                                     {
                                        options.map((option, id) => {
                                        const percentage = (option.votes.length/voteCount * 100).toFixed(2);
                                    return  < div className='option'>
                                    <p>Would you rather {option.text} ?</p>
                                    <div className="percentage-bar"                                                >
                                     <span className="percentage" 
                                     style={{height: "25px", 
                                        background: "green",
                                        width:`${percentage}rem`}}>
                                        {percentage}%
                                        </span>
                                        </div>
                                        <p className="vote-score">{option.votes.length} out of {voteCount} votes</p>
                                        </div>
                                        })}
                                    </div>
}
                    </div>
                </div>
        </div>
        </div>
    )
}
