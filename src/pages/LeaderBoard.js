import React from 'react';
import {useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { selectNewUsers} from '../Formatted';

const LeaderBoard = () => {
const users = useSelector(selectNewUsers());

        return (
            <div className='leaderboard'>
            <h1>Leader board</h1>
            {
                users.map(user => {
                   return  <div className='leaderboard__content' key={user.id} >
                        <div className='leaderboard__image'>
                        <img  src={user.avatarURL} alt="profile-image" style={{width:'100%', height:'100%'}}/>
                        </div>
                        <div className="result ">
                            <h3>{user.name}</h3>
                            <div result__content>
                            <h6>Answered question</h6> 
                             <h6>{Object.keys(user.answers).length}</h6>
                             </div>
                             <hr/>
                             <div result__content>
                                 <h6>Created questions</h6> 
                             <h6>{Object.keys(user.questions).length}</h6>
                             </div>
                        </div>
                        <div className="leaderboard__score">
                        <h5 >Score</h5>
                        <hr />
                        <h5>{user.totalScore}</h5>
                        </div>
                        
                    </div>

            })}
            </div>
        )
    
}


export default LeaderBoard  ;