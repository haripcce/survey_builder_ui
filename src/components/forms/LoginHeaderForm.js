import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const LoginHeaderForm = () => {
    return (
    
    <div class="row">
        <div class="col-8">
        <h1>Survey Builder</h1>
        </div>
        <div class="col-4">
        <Link to="/signup">New User? Sign Up</Link>
        </div>
    </div>

       
    );
};

export default LoginHeaderForm;
