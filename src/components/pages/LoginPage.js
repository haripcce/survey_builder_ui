import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {LoginForm} from '../forms/LoginForm';
import LoginHeaderForm from '../forms/LoginHeaderForm';


class LoginPage extends Component {



    render() {
        return (


            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="standard-padding">
                        <LoginHeaderForm/>
                        <LoginForm submit={this.submit} />
                     </div>
               </div>
            </div>



        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
}

export default LoginPage;
