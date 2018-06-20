import React from 'react'
import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser: loginUser }
    , dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(LoginUser))
