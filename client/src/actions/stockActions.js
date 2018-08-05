import fetch from 'isomorphic-fetch'
import {handleCurrentData} from '../helpers/apiHandlers'

export function fetchStocksCurrentData(stocks) {
  const stockList = stocks.map(stock => stock.symbol).join(",")
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockList}&types=quote`
  return (dispatch) => {
    dispatch({type: 'CURRENT_DATA_BEGIN'})
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          response.json()
          .then(stocksResponseJson => {
            const stocksAttempt = {message: stocksResponseJson[0]}
            dispatch({type: 'CURRENT_DATA_FAILURE', payload: stocksAttempt})
          })
        } else {
          response.json()
            .then(responseJSON => {
              const currentData = handleCurrentData(responseJSON)
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
        dispatch({type: 'FETCH_CURRENT_PRICE', payload: responseJSON})
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
        dispatch({type: 'GAINER_DATA_SUCCESS', payload: responseJSON})
      })
    }
}

export function fetchLosersData() {
  const url = `https://api.iextrading.com/1.0/stock/market/list/losers`
  return (dispatch) => {
    dispatch({type: 'LOADING_LOSER_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'LOSER_DATA_SUCCESS', payload: responseJSON})
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
        response.json()
          .then(responseJSON => {
            dispatch({type: 'FETCH_INDEX_DATA', payload: responseJSON
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
