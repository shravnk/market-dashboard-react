// import React from 'react'
// import { loginUser } from '../actions/userActions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
// import { Link } from "react-router-dom"
//
// const LoginUser = ({ values, handleSubmit, dispatch }) => {
//   const loginInfo = (values) => {
//     dispatch(loginUser(values, dispatch))
//   }
//   return(
//     <div>
//       <h1>Log In</h1>
//         <form onSubmit={handleSubmit(loginInfo)}>
//         <div>
//           <label>Username:</label>
//           <input type="text" ref = {node => this.username = node} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="text" ref = {node => this.password = node} />
//         </div>
//         <br></br>
//         <button type="submit" label="submit">Login</button>
//       </form>
//     </div>
//   )
// }
//
// export default LoginUser
