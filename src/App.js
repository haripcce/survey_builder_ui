/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import DashboardPage from './components/pages/DashboardPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';
import messages from "./messages";
import "./scss/index.scss";

class App extends React.Component {

render(){
	const { location, lang } = this.props;
return (
<IntlProvider locale={lang} messages={messages[lang]}>
<div className="container-fluid">
		<GuestRoute path="/" location={location} exact component={HomePage} />
		<GuestRoute path="/login" location={location} exact component={LoginPage} />
		<GuestRoute path="/signup" location={location} exact component={SignUpPage} />
		<GuestRoute path="/forgotpassword" location={location} exact component={ForgotPasswordPage} />
		<UserRoute path="/dashboard" location={location} exact component={DashboardPage} />
	</div>
	</IntlProvider>
	);
}
}

App.propTypes = {
	location: PropTypes.shape({
	  pathname: PropTypes.string.isRequired
	}).isRequired,
	lang: PropTypes.string.isRequired
  };
  function mapStateToProps(state) {
	return {
	  lang: state.locale.lang
	};
  }
  export default connect(mapStateToProps, {  })(App);
