import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { FormattedMessage } from "react-intl";
import { setLocale } from "../../actions/locale";

class TopNavigation extends React.Component {
  state = {
    activeNav:"dashboard"
  }
  onNavClick(nav){
    this.setState({activeNav:nav});
  }
  render() {
    const { isConfirmed, isAuthenticated, logout } = this.props;
    const { activeNav } = this.state;
    return (
      <div class="container-fluid">
        <div class="row" id="nav-header">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <a class="navbar-brand" href="/dashboard">Survey Builder</a> 
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div id="logoutMenu">
{/* 
  <a  onClick={() => this.props.setLocale("en")}>
      EN
    </a>{" "}
    |
    <a  onClick={() => this.props.setLocale("ru")}>
      RU
</a>
*/} 
 
 


{isAuthenticated && <button onClick={logout}><span class="glyphicon glyphicon-log-out"></span></button>  }
</div>
        </div>
        </div>
        <div class="row" id="nav-header">
        
       
        </div>
  <div class="row">
    
      <nav class="navbar navbar-default">
        
          
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            
          </div>

         
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav nav-justified">
      <li  className={
                    activeNav === 'dashboard' ? "active" : ""
                    } ><a  onClick={ () => this.onNavClick('dashboard')} href="#">Dashboard</a></li>
      <li  className={
                    activeNav === 'surveys' ? "active" : ""
                    }><a onClick={ () => this.onNavClick('surveys')} href="#">Surveys</a></li>
      <li  className={
                    activeNav === 'reports' ? "active" : ""
                    }><a onClick={ () => this.onNavClick('reports')} href="#">Reports</a></li>
    </ul>
          </div>
         
        
        
      </nav>
   
  </div>
</div>
      
    );
  }
}

TopNavigation.propTypes = {
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

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(TopNavigation);
