export default function stockReducer(state = {loading: false, showHistory: false, gainerData: [], loserData: []}, action) {
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
          latestPrice: stock.quote.latestPrice.toFixed(2),
          changePercent: (stock.quote.changePercent * 100).toFixed(2),
          high: stock.quote.high.toFixed(2),
          low: stock.quote.low.toFixed(2)
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
    case 'GAINER_DATA_SUCCESS':
      const gainerData = action.payload.map((stock) => ({
        symbol: stock.symbol,
        companyName: stock.companyName,
        latestPrice: stock.latestPrice,
        open: stock.open,
        high: stock.high,
        low: stock.low,
        chgPct: (stock.changePercent * 100).toFixed(2)
      }))
      return Object.assign({}, state, {loading: false, gainerData: gainerData})
    case 'LOSER_DATA_SUCCESS':
        const loserData = action.payload.map((stock) => ({
          symbol: stock.symbol,
          companyName: stock.companyName,
          latestPrice: stock.latestPrice,
          open: stock.open,
          high: stock.high,
          low: stock.low,
          chgPct: (stock.changePercent * 100).toFixed(2)
        }))
        return Object.assign({}, state, {loading: false, loserData: loserData})
    default:
        return state
  }
}
