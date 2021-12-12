import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { withRouter } from 'react-router';
import { UnansweredQuestions } from '../Components/UnansweredQuestions';
import { AnsweredQuestions } from '../Components/AnsweredQuestions';
import { questionsById,selectUsersInfo,selectAuthenticatedUser } from '../Formatted';
import { useSelector } from 'react-redux';

 const Home = () => {

    const users = useSelector(selectUsersInfo);
    const authenticatedUser = useSelector(selectAuthenticatedUser);  
    const {unansweredQuestions, answeredQuestions} = useSelector(questionsById(authenticatedUser.id));

    return (
        <div className='home'>
        <Tabs defaultActiveKey="unanswer" id="uncontrolled-tab-example" className='home__tab' >
        <Tab eventKey="unanswer" title="Unanswered Questions">
         <UnansweredQuestions unansweredQuestions={unansweredQuestions}
            users={users} />
        </Tab>
        <Tab eventKey="answer" title="Answered Questions">
        <AnsweredQuestions answeredQuestions={answeredQuestions}
         users={users} />
        </Tab>
        
        </Tabs>
        </div>
    )
}

export default withRouter(Home);