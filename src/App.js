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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from "./components/navigation/TopNavigation";
import reportsPage from "./components/reports/reportsPage";
import surveysPage from "./components/surveys/surveys";
import CreateNewSurvey from "./components/surveys/CreateNewSurvey";

class App extends React.Component {

render(){
	const { location, lang, isAuthenticated } = this.props;
return (
	<div>
		{ isAuthenticated ? <TopNavigation/>: '' }
<IntlProvider locale={lang} messages={messages[lang]}>
<div className="container-fluid">
		<GuestRoute path="/" location={location} exact component={HomePage} />
		<GuestRoute path="/login" location={location} exact component={LoginPage} />
		<GuestRoute path="/signup" location={location} exact component={SignUpPage} />
		<GuestRoute path="/forgotpassword" location={location} exact component={ForgotPasswordPage} />
		<UserRoute path="/dashboard" location={location} exact component={DashboardPage} />
		<UserRoute path="/reports" location={location} exact component={reportsPage} />
		<UserRoute path="/surveys" location={location} exact component={surveysPage} />
		<UserRoute path="/create-survey" location={location} exact component={CreateNewSurvey} />
	</div>
	</IntlProvider>
	</div>);
}
}

App.propTypes = {
	location: PropTypes.shape({
	  pathname: PropTypes.string.isRequired
	}).isRequired,
	lang: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };
  function mapStateToProps(state) {
	return {
	  lang: state.locale.lang,
	  isAuthenticated: !!state.user.token
	};
  }
  export default connect(mapStateToProps, {  })(App);
