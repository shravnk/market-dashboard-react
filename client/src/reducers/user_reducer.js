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
    case 'UPVOTE_SUCCESS':
      const symbol = action.payload.stock.symbol
      return {
          ...state,
          stocks: state.stocks.map(
              (stock, i) => stock.symbol === symbol ? {...stock, upvotes: action.payload.stock.upvotes}
                                                    : stock
              )
            }
    case 'LOGOUT':
      return Object.assign({}, {auth_success: false}, action.payload)
    case 'ADD_STOCKS':
      return Object.assign({}, state, {stocks: [...state.stocks, {...action.payload.stock, upvotes: 0}], messageSuccess: action.payload.message})
    case 'DELETE_MESSAGE':
      return Object.assign({}, state, {messageSuccess: ''})
    default:
      return state
  }
}
