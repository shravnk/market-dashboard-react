export default function stockReducer(state = {
  currentLoading: false,
  detailsLoading: false,
  historyLoading: false,
  showHistory: false,
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
    case 'CURRENT_PRICE_SUCCESS':
      return Object.assign({}, state, {currentStockPrice: action.payload})

    case 'HISTORY_DATA_BEGIN':
      return Object.assign({}, state, {showHistory: true, historyLoading: true, historyData: null, historyPeriod: null, historySymbol: null})
    case 'HISTORY_DATA_SUCCESS':
      return Object.assign({}, state, {historyLoading: false, historyData: action.payload, historyPeriod: action.period, historySymbol: action.symbol})
    case 'CLEAR_HISTORY_DATA':
      return Object.assign({}, state, {showHistory: false, historyData: null})

    case 'GAINER_DATA_SUCCESS':
      return Object.assign({}, state, {gainerData: action.payload})
    case 'LOSER_DATA_SUCCESS':
      return Object.assign({}, state, {loserData: action.payload})

    case 'INDEX_DATA_SUCCESS':
      return Object.assign({}, state, {indexData: action.payload})
    case 'INDEX_HISTORY_SUCCESS':
      return Object.assign({}, state, {loading: false, indexHistory: action.payload})
    case 'INDEX_HISTORY_CHANGE':
      return Object.assign({}, state, {currentIndexName: action.payload})

    default:
        return state
  }
}
