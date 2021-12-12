import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { selectAuthenticatedUser } from '../Formatted'
import { resetAuthUser } from  '../actions/authedUser';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


 const Navigation = () => {
const dispatch = useDispatch();
const history = useHistory();

  const authedUser = useSelector(selectAuthenticatedUser);

  const Logout = (e) => {
    e.preventDefault();
    dispatch(resetAuthUser());
    history.push("/");
  };

    return (
        <div className='navigationContainer'>
          {authedUser &&
<Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to ='/home' className='linked'>Home </Link>
      
     
      <Link to ='/add' className='linked'>New Question</Link>
      <Link to='/leaderboard' className='linked'>Leaderboard</Link>
      <Nav.Link href="#" className='linked'> 
      <div className='userprofile'>
      <div className='user__name'>{authedUser.name}</div>
        <div className='imageContainer'>
        <img src={authedUser.avatarURL}  alt='user-image' style={{width:'100%', height: '100%'}}/>
        </div>
          </div>
      </Nav.Link>
      <Link to='' onClick={Logout} className='logout' className='linked'>Logout</Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar> 
  }
        </div>
    )
}
 export default withRouter(Navigation)