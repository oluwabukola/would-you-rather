import React, { useRef } from 'react';
import { selectAuthenticatedUser } from '../Formatted';
import { useSelector,  useDispatch  } from 'react-redux';
import { useHistory } from 'react-router';
import { AddQuestion } from '../actions/action';

export const CreateQuestion = () => {
    const dispatch = useDispatch();
    const optionOneRef = useRef("");
const optionTwoRef= useRef(""); 
const history = useHistory();
const authedUser = useSelector(selectAuthenticatedUser);

const handleSubmit = (e) => {
    e.preventDefault();
   const optionOneText = optionOneRef.current.value;
   const optionTwoText = optionTwoRef.current.value;
   const newUserQuestion = { optionOneText, optionTwoText, author:authedUser.id};
   
   if(optionOneText && optionTwoText) {
      dispatch(AddQuestion({question: newUserQuestion, authedUser}));
       optionOneRef.current.value = "";
       optionTwoRef.current.value = "";
       return history.push('/home');
   }
   alert("Please fill in  the form!")
   
   };
    return (
        <div className='createQuestion'>
            <h4 className='createQuestion__heading'>Create new question</h4>
            <hr />
            <p className='text'>Complete the question</p>
            <form onSubmit={handleSubmit}>
                <div className='option-one'>
                <label >would you rather?</label><br/>
                <input type='text' id='optionOne'
                ref={optionOneRef}   
                name="optionOne"
                 placeholder='Enter option one here'/>
                </div>
                    <div>Or</div>
                    <div className='option-two'>
                    <input type='text' placeholder='Enter option two here' id='optionTwo'
                    ref={optionTwoRef}   
                    name="optionTwo" />
                    </div>
                    <input type='submit' value='create question'/>
            </form>
        </div>
    )
}
