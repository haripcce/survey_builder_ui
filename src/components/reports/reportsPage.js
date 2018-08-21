/* eslint-disable react/prefer-stateless-function,no-unused-vars,react/prop-types,jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { setLocale } from "../../actions/locale";
import "../../scss/navbar.scss";

class reportsPage extends React.Component {
    render() {
        const { isConfirmed, isAuthenticated, logout } = this.props;
        return (
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-lg-12">
                        Reports Page Container
                    </div>
                </div>
        );
    }
}

reportsPage.propTypes = {
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

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(reportsPage);
