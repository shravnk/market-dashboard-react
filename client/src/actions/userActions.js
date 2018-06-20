import fetch from 'isomorphic-fetch'

export const newUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'START_SIGNUP'})
    return fetch('/api/users', {
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

export const loginUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'START_LOGIN'})
    return fetch('/api/sessions', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { "user": {
          "username" : values.username,
          "password" : values.password
        }
      })
    })
    .then(response => {
      if (response.status !== 200) {
        response.json()
        .then(loginResponseJson => {
          let loginAttempt = {message: loginResponseJson[0]}
          dispatch({
            type: 'LOGIN',
            payload: loginAttempt
           })
        })
      } else {
        response.json()
        .then(loginResponseJson => {
          let currentUser = Object.assign({}, loginResponseJson, {auth_success: true}, { message: `Successfully Logged in as ${loginResponseJson.username}` })
          dispatch({
            type: 'LOGIN',
            payload: currentUser
           })
        })
      }
    })
  }
}

export const logoutUser = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOGGING_USER_OUT'})
    return fetch(`http://localhost:3000/api/auth/logout`,{
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      },
      body: JSON.stringify(
        { "user": {"email" : currentUser.email}})
    })
    .then(
      dispatch({
        type: 'USER_LOGOUT',
        payload: { message: 'Succesfully logged out' }
      })
    )
  }
}
