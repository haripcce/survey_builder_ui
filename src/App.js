import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';



const App = () => (
	<div class="container-fluid">
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/signup" exact component={SignUpPage} />
		<Route path="/forgotpassword" exact component={ForgotPasswordPage} />
	</div>
)

export default App;
