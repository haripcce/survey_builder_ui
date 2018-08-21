/* eslint-disable react/prefer-stateless-function,no-unused-vars,react/prop-types,jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { setLocale } from "../../actions/locale";
import "../../scss/navbar.scss";

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, isAuthenticated, logout } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12 tab-pan-padding">
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Manage User
              </a>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Recent Survey
              </a>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Open Surveys
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 tab-pan-padding">
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Manage Emails
              </a>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Survey Templates
              </a>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 text-center">
              <a>
                Question Bank
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAuthenticated:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    isAuthenticated: !!state.user.token,
    setLocale: PropTypes.func.isRequired
  };
}

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(DashboardPage);
