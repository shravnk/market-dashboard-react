import 'isomorphic-fetch'
import * as apiHandlers from '../helpers/apiHandlers'

export function fetchStocksCurrentData(stocks) {
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks}&types=quote`
  return (dispatch) => {
    dispatch({type: 'CURRENT_DATA_BEGIN'})
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          return response.json()
          .then(stocksResponseJson => {
            const stocksAttempt = stocksResponseJson
            dispatch({type: 'CURRENT_DATA_FAILURE', payload: stocksAttempt})
          })
        } else {
            return response.json()
            .then(responseJSON => {
              const currentData = apiHandlers.current(responseJSON)
              dispatch({type: 'CURRENT_DATA_SUCCESS', payload: currentData})
            })
          }
      })
    }
  }

export function fetchStockDetailedData(symbol) {
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/stats`
  return (dispatch) => {
    dispatch({type: 'STOCK_DETAILS_BEGIN'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'STOCK_DETAILS_SUCCESS', payload: responseJSON})
      })
    }
}

export function fetchStockHistory(symbol, period) {
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/chart/${period}`
  return (dispatch) => {
    dispatch({type: 'HISTORY_DATA_BEGIN'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'HISTORY_DATA_SUCCESS', payload: responseJSON, period: period, symbol: symbol})
      })
    }
}

export function fetchStockCurrentPrice(symbol) {
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/price`
  return (dispatch) => {
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'CURRENT_PRICE_SUCCESS', payload: responseJSON})
      })
    }
}

export function fetchIndexHistory() {
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=spy,qqq,iwm,efa,eem,fxi,vxx&types=company,chart&range=1d`
  return (dispatch) => {
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'INDEX_HISTORY_SUCCESS', payload: responseJSON})
      })
    }
}

export function fetchGainersData() {
  const url = `https://api.iextrading.com/1.0/stock/market/list/gainers`
  return (dispatch) => {
    dispatch({type: 'LOADING_GAINER_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        const gainerData = apiHandlers.movers(responseJSON)
        dispatch({type: 'GAINER_DATA_SUCCESS', payload: gainerData})
      })
    }
}

export function fetchLosersData() {
  const url = `https://api.iextrading.com/1.0/stock/market/list/losers`
  return (dispatch) => {
    dispatch({type: 'LOADING_LOSER_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        const loserData = apiHandlers.movers(responseJSON)
        dispatch({type: 'LOSER_DATA_SUCCESS', payload: loserData})
      })
    }
}

export function fetchIndicesCurrentData() {
  const indexList = ["spy","qqq","iwm","efa","eem","fxi","vxx"]
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${indexList}&types=quote`
  return (dispatch) => {
    dispatch({type: 'LOADING_INDEX_DATA'})
    return fetch(url)
    .then(response => {
        return response.json()
          .then(responseJSON => {
            const indicesData = apiHandlers.indices(responseJSON)
            dispatch({type: 'INDEX_DATA_SUCCESS', payload: indicesData
            })
          })
        })
    }
}

export function changeIndexDisplay(indexName) {
  return (dispatch) => {
    dispatch({type: 'INDEX_HISTORY_CHANGE', payload: indexName})
  }
}

export function clearHistoryData () {
  return (dispatch) => {
    dispatch({type: 'CLEAR_HISTORY_DATA'})
  }
}
