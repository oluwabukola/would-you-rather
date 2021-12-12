import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectAuthenticatedUser } from './Formatted';


const PrivateRoute = ({ children, ...rest }) => {
const authUser = useSelector(selectAuthenticatedUser);
return (
    <Route
        {...rest}
        render={({location })=> 
        authUser ? (
        children
        ):
        (
            <Redirect
                to={{
                    pathname: "/",
                    state: {from: location}
                }}
            />
        )
        }
    />
) 


}


export default PrivateRoute;