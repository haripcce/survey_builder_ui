/* eslint-disable react/prefer-stateless-function,no-unused-vars,react/prop-types,jsx-a11y/no-static-element-interactions,react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { setLocale } from "../../actions/locale";
import "../../scss/navbar.scss";
import SurveysTable from './surveys-datatable';

class surveysPage extends React.Component {
    render() {
        const { isConfimed, isAuthenticated, logout } = this.props;
        return (
                <SurveysTable/>
        );
    }
}

surveysPage.propTypes = {
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

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(surveysPage);
