export const newUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'START_SIGNUP'})
    return fetch(`http://localhost:3000/api/auth/users`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
          { "user": {
            "username" : values.username,
            "password" : values.password
          }
        }),
      })
      .then(response => {
        if (response.status !== 201) {
          response.json()
          .then(signupResponse => {
            let signupAttempt = { message: signupResponse };
            dispatch({
              type: 'USER_SIGNUP',
              payload: signupAttempt
             })
          })
        } else {
          response.json()
          .then(signupResponse => {
            let currentUser = Object.assign({}, signupResponse, {is_authenticated: true}, { message: `Succesfully Created an account as ${signupResponse.username}`})
            dispatch({
              type: 'USER_SIGNUP',
              payload: currentUser
             })
          })
        }
      })
  }
}
