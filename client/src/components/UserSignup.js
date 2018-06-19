import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { loginUser, signupUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"

const SignupUser = ({ values, handleSubmit, dispatch }) => {

  const signupInfo = (values) => {
    dispatch(signupUser(values, dispatch))
  }
  return(
    <div align="center">
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(signupInfo)}>
        <div>
          <label>Username:</label>
          <input type="text" ref = {node => this.username = node}
        </div>
        <div>
          <label>Password:</label>
          <input type="text" ref = {node => this.password = node}
        </div>
        <br></br>
        <button type="submit" label="submit">Signup</button>
      </form>
    </div>
  )
}


export default SignupUser
