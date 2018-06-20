export default function UserReducer(state = {}, action) {
  switch ( action.type ) {
    case 'USER_SIGNUP':
        const currentUser = Object.assign({}, action.payload)
        return currentUser
    default:
      return state
  }
}
