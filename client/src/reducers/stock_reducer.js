export default function stockReducer(state = {
  currentLoading: false,
  detailsLoading: false,
  historyLoading: false,
  showHistory: false,
  gainerData: [],
  loserData: [],
  detailedData: {},
  currentIndexName: 'SPY'
  }, action) {
  switch (action.type) {
    case 'CURRENT_DATA_BEGIN':
      return Object.assign({}, state, {currentLoading: true})
    case 'CURRENT_DATA_SUCCESS':
      return Object.assign({}, state, {currentLoading: false, currentData: action.payload})
    case 'CURRENT_DATA_FAILURE':
      return Object.assign({}, state, {currentLoading: false, currentData: null})
    case 'STOCK_DETAILS_BEGIN':
        return Object.assign({}, state, {detailsLoading: true, detailedData: null})
    case 'STOCK_DETAILS_SUCCESS':
        return Object.assign({}, state, {detailsLoading: false, detailedData: action.payload})
    case 'HISTORY_DATA_BEGIN':
        return Object.assign({}, state, {showHistory: true, historyLoading: true, historyData: null, historyPeriod: null, historySymbol: null})
    case 'HISTORY_DATA_SUCCESS':
        return Object.assign({}, state, {historyLoading: false, historyData: action.payload, historyPeriod: action.period, historySymbol: action.symbol})
    case 'CLEAR_HISTORY_DATA':
        return Object.assign({}, state, {showHistory: false, historyData: null})

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
    case 'FETCH_INDEX_DATA':
          const indexResponse = Object.values(action.payload)
          let indexData = []
          if (indexResponse === undefined || indexResponse.length == 0) {
            indexData = []
          } else {
            indexData = indexResponse.map((stock) => ({
              symbol: stock.quote.symbol,
              latestPrice: stock.quote.latestPrice.toFixed(2),
              changePercent: (stock.quote.changePercent * 100).toFixed(2)
              }))
          }
          return Object.assign({}, state, {loading: false, indexData: indexData})
    case 'INDEX_HISTORY_SUCCESS':
      return Object.assign({}, state, {loading: false, indexHistory: action.payload})
    case 'INDEX_HISTORY_CHANGE':
      return Object.assign({}, state, {currentIndexName: action.payload})
    case 'FETCH_CURRENT_PRICE':
      return Object.assign({}, state, {currentStockPrice: action.payload})
    default:
        return state
  }
}
