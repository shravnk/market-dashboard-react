import React from 'react'
import { signupUser } from '../actions/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"

const SignupUser = ({ createUser }) => {


    const confirmation = (e) => {
      e.preventDefault()
      const data = {
        'username': this.username.value,
        'password': this.password.value
      }
      createUser(data)
    }

  return(
    <div align="center">
      <h1>Sign Up</h1>
        <form onSubmit={confirmation.bind(this)}>
        <div>
          <label>Username:</label>
          <input type="text" ref = {node => this.username = node} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" ref = {node => this.password = node} />
        </div>
        <br></br>
        <button type="submit" label="submit">Signup</button>
      </form>
    </div>
  )

}


export default SignupUser
