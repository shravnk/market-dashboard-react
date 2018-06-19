export default function stockReducer(state = {loading: false}, action) {
  switch (action.type) {
    case 'LOADING_CURRENT_DATA':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CURRENT_DATA':
      return Object.assign({}, state, {loading: false, currentData: Object.values(action.payload)})
    case 'LOADING_DETAILED_DATA':
        return Object.assign({}, state, {loading: true, detailedData: null})
    case 'FETCH_DETAILED_DATA':
        return Object.assign({}, state, {loading: false, detailedData: action.payload})
    default:
        return state
  }
}
