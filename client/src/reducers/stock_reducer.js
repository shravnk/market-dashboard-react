export default function stockReducer(state = {loading: false, delayedPrice: 0}, action) {
  switch (action.type) {
    case 'LOADING_STOCK':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_DELAYED_PRICE':
      return {loading: false, delayedPrice: action.payload}
    default:
        return state
  }
}
