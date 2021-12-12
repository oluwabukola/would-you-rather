import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import logo from '../Image/logo.png';
import {selectUsersInfo} from '../Formatted';
import { setAuthUser } from '../actions/authedUser';
import { useHistory } from 'react-router';



 const Login = ({dispatch, users}) => {
    const [userId, setUserId] = useState("");
    const [url, setUrl] = useState('')
    const history=useHistory();

    useEffect(()=> {
        history.location.state && setUrl(history.location.state.from.pathname);
    }, []);

    const Options = Object.keys(users).map(id => ({
        value: users[id].id, label:
        <><img className="option-img" src={users[id].avatarURL} alt="profileimage"/>
        <span className="option-name">{users[id].name}</span></>
    }));
    const handleChange =(id) => {
         setUserId(id.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userId){
            
            dispatch(setAuthUser(users[userId]));   
             url ? history.push(url) : history.push("/home");
            
            return;
        }
            return alert("Select a login user");
        }
    

    return (
        <div className='login'>
           
                <div className='login__header'>
                <h4 className='login__header-main'>Welcome to the Would you rather app</h4>
                <p className='login__header-sub'>Please sign in to continue</p>
                </div>
                <hr/>
                <img src={logo} alt='rect logo' style={{width: '20%', height: '20%'}}/>
                <h2 className='login__main-text'>Login</h2>
                <form onSubmit={handleSubmit}>
                <Select name="usersValue" className='selectingOptions'
                    required
                     onChange={handleChange}
                     options={Options}  />
                     {/* <select name="usersValue" className='selectingOptions' required
                     onChange={handleChange}>
                   { Object.keys(users).map(id => {
                    return   <option value={users[id].id}>
                  <img className="option-img" src={users[id].avatarURL} alt="profileimage"/>
                 <span className="option-name">{users[id].name}</span>
                         </option>
                   })}
                     </select> */}

                <button type="submit" className='login__button'>
                 Login
                 </button>
                </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      
        users: selectUsersInfo(state)
    };
    }


export default connect(mapStateToProps)(Login);
