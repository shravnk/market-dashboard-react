export default function UserReducer(state = {auth_success: false}, action) {
  switch ( action.type ) {
    case 'USER_SIGNUP':
        const currentUser = Object.assign({}, action.payload)
        return currentUser
    case 'LOGIN':
      if (action.payload.auth_success === true) {
        const currentUser = Object.assign({}, action.payload)
        return currentUser
      }else {
        return Object.assign({}, state, action.payload)
      }
    default:
      return state
  }
}
