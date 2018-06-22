export default function UserReducer(state = {auth_success: false, symbols: []}, action) {
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
        return Object.assign({}, action.payload)
      } else {
        return Object.assign({}, state, action.payload)
      }
    case 'LOGOUT':
      return Object.assign({}, {auth_success: false}, action.payload)
    case 'ADD_STOCKS':
      return Object.assign({}, state, {stocks: Object.values(action.payload.stocks), messageSuccess: action.payload.message})
    case 'DELETE_MESSAGE':
      return Object.assign({}, state, {messageSuccess: ''})
    default:
      return state
  }
}
