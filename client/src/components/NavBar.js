import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
        <div className="nav" >
          <ul>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/home"
          >
            My Stocks
          </NavLink>
          </li>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/overview"
          >
            Market Overview
          </NavLink>
          </li>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/manage"
          >
            Add Stocks
          </NavLink>
          </li>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            onClick={handleSubmit}
            to="/login"
          >
            Log Out
          </NavLink>
          </li>
          </ul>
        </div>
      )
    } else {
      return(
        <div className="nav">
          <ul>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/login"
          >
          Login
          </NavLink>
          </li>
          <li>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/signup"
          >
          Sign Up
          </NavLink>
          </li>
          </ul>
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
