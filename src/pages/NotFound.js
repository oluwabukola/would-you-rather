import React from 'react';
import { Link } from 'react-router-dom';




const NotFound = () => {

    return (
        <div className="text-center">
        <h1>404(Page not found)</h1>
        <p>The page you requested for is not available. 
        Kindly click  on <Link to="/">Login to go back</Link> </p>
        </div>
    )
}


export default NotFound;

