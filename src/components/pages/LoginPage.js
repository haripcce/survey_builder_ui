import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import LoginHeaderForm from '../forms/LoginHeaderForm';


class LoginPage extends Component {

    

    render() {
        return (
            
       
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="standard-padding">
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
