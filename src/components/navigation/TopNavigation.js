import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {userLoggingOut} from "../../actions/auth";
import {setLocale} from "../../actions/locale";
import history from "../../history";

class TopNavigation extends React.Component {
    state = {
        activeNav: "dashboard"
    }

    onNavClick(nav) {
        this.setState({activeNav: nav});
        history.push(`/${nav}`);
    }

    render() {
        const {isAuthenticated, logout} = this.props;
        const {activeNav} = this.state;
        return (
            <div>
                <div className="row" id="nav-header">
                    <div className="col-xs-12">
                        <h1 className="navbar-brand text-center" href="/dashboard">SURVEY BUILDER</h1>
                        <span id="logoutMenu"> {
                            isAuthenticated &&
                        <button onClick={logout}> <span className="glyphicon glyphicon-log-out"/></button>
                        } </span>
                    </div>
                </div>
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav nav-justified">
                                <li className={activeNav === 'dashboard' ? "active" : ""}>
                                    <a onClick={() => this.onNavClick('dashboard')}>
                                        Dashboard
                                    </a>
                                </li>
                                <li className={activeNav === 'surveys' ? "active" : ""}>
                                    <a onClick={() => this.onNavClick('surveys')}>
                                        Surveys
                                    </a>
                                </li>
                                <li className={activeNav === 'reports' ? "active" : ""}>
                                    <a onClick={() => this.onNavClick('reports')}>
                                        Reports
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>

        );
    }
}

TopNavigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        isAuthenticated: !!state.user.token,
        setLocale: PropTypes.func.isRequired
    };
}

export default connect(mapStateToProps, {logout: userLoggingOut, setLocale}, null, {pure: false})(TopNavigation);
