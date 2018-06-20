export default function UserReducer(state = {auth_success: false}, action) {
  switch ( action.type ) {
    case 'USER_SIGNUP':
      if (action.payload.auth_success === true){
        const currentUser = Object.assign({}, action.payload)
        return currentUser
      } else {
        return Object.assign({}, state, action.payload)
      }

    case 'LOGIN':
      if (action.payload.auth_success === true) {
        const currentUser = Object.assign({}, action.payload)
        return currentUser
      }else {
        return Object.assign({}, state, action.payload)
      }
    case 'LOGOUT':
      const currentUser = Object.assign({}, {auth_success: false}, action.payload)
      return currentUser
    default:
      return state
  }
}
