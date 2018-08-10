import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import {Link} from 'react-router-dom';
import { userLoggingIn } from "../../actions/auth";


export class LoginForm extends Component {
    state = {
        data:{
            email:'',
            password:''
        },
        loading:false,
        errors:{}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.serverErrors });
    }

    onChange = e => this.setState({data: {...this.state.data,[e.target.id]:e.target.value}})
    
    onSubmit = e => {
        e.preventDefault();
        const errors =   this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length == 0){
            this.setState({ loading: true });
            this.props.submit(this.state.data)
        }
    }
    validate = (data) =>{
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password) errors.password = "Password can't be blank";
        return errors;

    }
    render() {
        const {data,errors} = this.state;
		return (
            <div class="row">
            <div class="col"> 
<form onSubmit={this.onSubmit}>
    {errors.global && (
        <div className="alert alert-danger">{errors.global}</div>
    )}
    <div class="form-group">
        <label for="email">Username</label>
        <input type="text" className={
              errors.email ? "form-control is-invalid" : "form-control"
            } id="email" placeholder="Enter username"
        value={data.email}
        onChange={this.onChange} />
        {errors.email &&  <InlineError text={errors.email}/>}
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" className={
              errors.password ? "form-control is-invalid" : "form-control"
            } id="password" placeholder="Enter password"
        value={data.password}
        onChange={this.onChange} />
    {errors.password &&  <InlineError text={errors.password}/>}
    </div>
    <div class="row">
        <div class="col-2">
        <button type="submit" class="btn btn-primary">Login</button>
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-secondary">Cancel</button>
        </div>
        <div class="col-6">
        <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
    </div>
</form>  
         </div>
         </div>   
			
		);
	}
}
LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};
function mapStateToProps(state) {
    return {
      serverErrors: state.formErrors.login
    };
  }

export default connect(mapStateToProps,{submit:userLoggingIn})(LoginForm);
