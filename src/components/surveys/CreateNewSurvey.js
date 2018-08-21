/* eslint-disable react/prefer-stateless-function,no-unused-vars,react/prop-types,jsx-a11y/no-static-element-interactions,react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { setLocale } from "../../actions/locale";

class CreateNewSurvey extends React.Component {
    render() {
        return (
            <div>
                create new survey
            </div>
        );
    }
}

CreateNewSurvey.propTypes = {
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        isAuthenticated: !!state.user.token,
        setLocale: PropTypes.func.isRequired
    };
}

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(CreateNewSurvey);