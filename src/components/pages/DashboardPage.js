import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, isAuthenticated, logout } = this.props;
    return (
      <div className="container-fluid">
        <h1>Dashboard Page</h1>
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
    isAuthenticated: !!state.user.token
    
  };
}

export default connect(mapStateToProps, {logout:userLoggingOut})(DashboardPage);
