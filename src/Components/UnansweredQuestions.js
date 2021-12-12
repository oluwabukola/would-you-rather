import React from 'react'
import { Link } from 'react-router-dom'

export const UnansweredQuestions = ({unansweredQuestions, users}) => {
    return (
        <>
        {unansweredQuestions.map(unanswer =>
       
        <div className='questions' key={unanswer.id}>
            
                <p className='questions__content-name'>{`${users[unanswer.author].name} asks`}</p>
                <hr />
                <div className='questions__content--sub'>
                    <div className='sub-left'>
                        <img  src={users[unanswer.author].avatarURL} 
                        style={{width:'100%', height: '100%'}} alt='profile image'/>
                    </div>
                    <div className='sub__right'>
                        <h5 className='sub__right-text'>Would you rather</h5>
                        <p className='sub__right-sub'>{unanswer.optionOne.text}</p>
                        <Link to={`/questions/${unanswer.id}`}>
                        <button type='button' className='viewpoll'>View poll</button>
                        </Link>
                    </div>
                </div>
        </div>
         )}
        </>
    )
}
