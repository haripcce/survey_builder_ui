import React from 'react';
import {Link} from 'react-router-dom';

const LoginHeaderForm = () => (

    <div className="row">
    <div className="col-md-12">
        <div className="col-lg-8 col-sm-12 col-md-12">
            <h1 className="text-center">Survey Builder</h1>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12 text-right standard-padding">
            <Link to="/signup">New User? Sign Up</Link>
        </div>
    </div>
    </div>


    );

export default LoginHeaderForm;
