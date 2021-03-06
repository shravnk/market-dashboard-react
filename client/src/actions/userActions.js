import fetch from 'isomorphic-fetch'
import history from '../history'

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
        } history.push('/home')
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
      } history.push('/home')
    })
  }
}

export const logout = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOGGING_USER_OUT'})
    return fetch(`/api/sessions`,{
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(
        { "user": {"username" : currentUser.username}})
    })
    .then(
      dispatch({
        type: 'LOGOUT',
        payload: { message: 'Succesfully logged out' }
      })
    )
  }
}


export const addStocks = (values) => {
  return (dispatch) => {
    dispatch({type: 'START_ADD_STOCK'})
    return fetch('/api/stocks', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
          { "stock": {
            "symbol" : values.symbol
          },
          "user": {
            "username": values.username
          }
        }),
      })
      .then(response => {
        if (response.status !== 201) {
          response.json()
          .then(addStockResponse => {
            let addStockAttempt = { message: addStockResponse };
            dispatch({
              type: 'ADD_STOCKS',
              payload: addStockAttempt
             })
          })
        } else {
          response.json()
          .then(addStockResponse => {
            let addStockAttempt = Object.assign({}, {stocks: addStockResponse, message: `Succesfully added stock  ${values.symbol}`})
            dispatch({
              type: 'ADD_STOCKS',
              payload: addStockAttempt
             })
          })
        } history.push('/manage')
      })
  }
}

export const deleteMessage = () => {
  return (dispatch) => {
    dispatch({type: 'DELETE_MESSAGE'})
  }
}
