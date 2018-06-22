import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

const NavBar = ({currentUser, logout}) => {
  const handleSubmit = () => {
    return logout(currentUser)
  }

  const renderLinks = (currentUser) => {
    if (currentUser.auth_success) {
      return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/manage"
          >
            Manage Account
          </NavLink>

          <NavLink
            style={{ marginRight: '10px' }}
            onClick={handleSubmit}
            to="/login"
          >
            Log Out
          </NavLink>

        </div>
      )
    } else {
      return(
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/login"
          >
          Login
          </NavLink>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/signup"
          >
          Sign Up
          </NavLink>
        </div>
      )
    }
  }
  return (
    renderLinks(currentUser)
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
  }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar))
