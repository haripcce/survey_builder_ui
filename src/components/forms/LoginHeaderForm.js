import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const LoginHeaderForm = () => {
    return (
    
    <div class="row">
    <div class="col-md-12">
        <div class="col-lg-8 col-sm-12 col-md-12">
            <h1 class="text-center">Survey Builder</h1>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-12 text-right standard-padding">
            <Link to="/signup">New User? Sign Up</Link>
        </div>
    </div>
    </div>

       
    );
};

export default LoginHeaderForm;
