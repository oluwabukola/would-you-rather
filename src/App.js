

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './pages/Login';
import Navigation from './Components/Navigation';
import Home from './pages/Home';
import { CreateQuestion } from './pages/CreateQuestion';
import { GetUsers, GetQuestions } from './actions/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {QuestionPoll} from './pages/QuestionPoll'
import { Poll } from './pages/Poll';
import LeaderBoard from './pages/LeaderBoard';
import PrivateRoute from './PrivateRoute';

import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
  
    dispatch(GetUsers());
  dispatch(GetQuestions());
}, []
);
  return (
    <Router>
      <Navigation />
      <div className='container'>
     <Switch>
      <Route path='/' exact  >
        <Login />
      </Route>
      <PrivateRoute path='/home' exact  >
        <Home />
      </PrivateRoute>
      <PrivateRoute path='/add' exact  >
        <CreateQuestion />
      </PrivateRoute>
      <PrivateRoute path='/questions/:id' exact>
      <QuestionPoll />
      </PrivateRoute>
      <PrivateRoute path='/leaderboard' exact>
      <LeaderBoard />
      </PrivateRoute>
      <Route path='/poll' exact >
      <Poll/>
      </Route>
      {/* <Route path='/NotFound'>
        <NotFound/>
        </Route> */}
      <Route exact path='*'>
      <NotFound/>
      </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App ;
