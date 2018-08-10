import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import LoginHeaderForm from '../forms/LoginHeaderForm';


class LoginPage extends Component {

    

    render() {
        return (
            <div class="row">
            <div class="col">
         
            </div>
            <div class="col">
                    <LoginHeaderForm/>
                    <LoginForm submit={this.submit} />
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
