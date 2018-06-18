export default function stockReducer(state = {loading: false}, action) {
  switch (action.type) {
    case 'LOADING_STOCK':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CURRENT_DATA':
      return {loading: false, currentData: action.payload}
    default:
        return state
  }
}
