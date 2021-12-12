import React from 'react';
import { Link } from 'react-router-dom';

export const AnsweredQuestions = ({answeredQuestions, users}) => {
    console.log('answered quest', answeredQuestions.map( x => x))
    return (
        <>
        {
            answeredQuestions.map( answer => 
            <div className='questions' key={answer.id}>
               <p className='questions__content-name'>{`${users[answer.author].name} asks`}</p>
                <hr />
                <div className='questions__content--sub'>
                    <div className='sub-left'>
                        <img  src={users[answer.author].avatarURL}  alt='profile image' style={{width:'100%'}}/>
                    </div>
                    <div className='sub__right'>
                        <h5 className='sub__right-text'>Would you rather</h5>
                        <p className='sub__right-sub'>{answer.optionOne.text}</p>
                        <Link to={`/questions/${answer.id}`}>
                        <button type='button' className='viewpoll'>View poll</button>
                        </Link>
                    </div>
                </div>
        </div>
        )
        }
        </>
    )
}
