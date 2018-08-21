import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import * as  dd from "../../actions/auth";

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {},

    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.serverErrors});
    }

    onChange = e => this.setState({data: {...this.state.data, [e.target.id]: e.target.value}})

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props.submit(this.state.data)
        }
    }
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Password can't be blank";
        return errors;

    }

    render() {
        const {data, errors} = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.onSubmit}>
                        {errors.global && (
                            <div className="alert alert-danger">{errors.global}</div>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Username</label>
                            <input type="text" className={
                                errors.email ? "form-control error" : "form-control"
                            } id="email" placeholder="Enter username"
                                   value={data.email}
                                   onChange={this.onChange}/>
                            {errors.email && <InlineError text={errors.email}/>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={
                                errors.password ? "form-control error" : "form-control"
                            } id="password" placeholder="Enter password"
                                   value={data.password}
                                   onChange={this.onChange}/>
                            {errors.password && <InlineError text={errors.password}/>}
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    serverErrors: PropTypes.string.isRequired
}

LoginForm.defaultProps = {serverErrors: ''};

function mapStateToProps(state) {
    return {
        serverErrors: state.formErrors.login
    };
}

export default connect(mapStateToProps, {submit : dd.userLoggingIn})(LoginForm);
