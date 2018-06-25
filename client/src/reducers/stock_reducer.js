export default function stockReducer(state = {loading: false, showHistory: false}, action) {
  switch (action.type) {
    case 'LOADING_CURRENT_DATA':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CURRENT_DATA':
      const stocksResponse = Object.values(action.payload)
      let currentData = []
      if (stocksResponse === undefined || stocksResponse.length == 0) {
        currentData = []
      } else {
        currentData = stocksResponse.map((stock) => ({
          symbol: stock.quote.symbol,
          latestPrice: stock.quote.latestPrice,
          changePercent: stock.quote.changePercent * 100,
          high: stock.quote.high,
          low: stock.quote.low
          }))
      }
      return Object.assign({}, state, {loading: false, currentData: currentData})
    case 'EMPTY_STOCK_LIST':
      return Object.assign({}, state, {currentData: []})
    case 'LOADING_DETAILED_DATA':
        return Object.assign({}, state, {loading: true, detailedData: null})
    case 'FETCH_DETAILED_DATA':
        return Object.assign({}, state, {loading: false, detailedData: action.payload})
    case 'LOADING_HISTORY_DATA':
        return Object.assign({}, state, {loading: true, showHistory: false, historyData: null})
    case 'FETCH_HISTORY_DATA':
        return Object.assign({}, state, {loading: false, showHistory: true, historyData: action.payload})
    default:
        return state
  }
}
