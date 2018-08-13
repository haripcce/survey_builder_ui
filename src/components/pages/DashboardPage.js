import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { FormattedMessage } from "react-intl";
import { setLocale } from "../../actions/locale";

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, isAuthenticated, logout } = this.props;
    return (
      <div className="container-fluid">
      <a  onClick={() => this.props.setLocale("en")}>
              EN
            </a>{" "}
            |
            <a  onClick={() => this.props.setLocale("ru")}>
              RU
            </a>
        <h1><FormattedMessage
                  id="nav.dashboard"
                  defaultMessage="Dashboard"
                /></h1>
        {isAuthenticated && <button onClick={logout}>Logout</button>  }
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
