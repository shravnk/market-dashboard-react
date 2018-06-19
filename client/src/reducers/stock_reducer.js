export default function stockReducer(state = {loading: false}, action) {
  switch (action.type) {
    case 'LOADING_CURRENT_DATA':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CURRENT_DATA':
      const stocksResponse = Object.values(action.payload)
      const currentData = stocksResponse.map((stock) => ({
        symbol: stock.quote.symbol,
        latestPrice: stock.quote.latestPrice,
        changePercent: stock.quote.changePercent * 100,
        high: stock.quote.high,
        low: stock.quote.low
        }))
      return Object.assign({}, state, {loading: false, currentData: currentData})
    case 'LOADING_DETAILED_DATA':
        return Object.assign({}, state, {loading: true, detailedData: null})
    case 'FETCH_DETAILED_DATA':
        return Object.assign({}, state, {loading: false, detailedData: action.payload})
    default:
        return state
  }
}
