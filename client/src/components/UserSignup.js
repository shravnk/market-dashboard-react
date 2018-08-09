import React from 'react'

const SignupUser = ({ createUser }) => {

  const handleSubmit = (e) => {
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
        <form onSubmit={handleSubmit.bind(this)}>
        <div>
          <label>Username</label>
          <input type="text" ref = {node => this.username = node} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" ref = {node => this.password = node} />
        </div>
        <br></br>
        <button type="submit" label="submit">Signup</button>
      </form>
    </div>
  )

}


export default SignupUser
