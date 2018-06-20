import React from 'react'
import { loginUser } from '../actions/userActions'

const LoginUser = ({ loginUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      'username': this.username.value,
      'password': this.password.value
    }
    loginUser(data)
  }
  return(
    <div>
      <h1>Log In</h1>
        <form onSubmit={handleSubmit.bind(this)}>
        <div>
          <label>Username:</label>
          <input type="text" ref = {node => this.username = node} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" ref = {node => this.password = node} />
        </div>
        <br></br>
        <button type="submit" label="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginUser
