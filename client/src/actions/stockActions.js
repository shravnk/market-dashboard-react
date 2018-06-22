import fetch from 'isomorphic-fetch'

export function fetchStocksCurrentData(stocks) {
  const stockList = stocks.map(stock => stock.symbol).join(",")
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockList}&types=quote`
  return (dispatch) => {
    dispatch({type: 'LOADING_CURRENT_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'FETCH_CURRENT_DATA', payload: responseJSON})
      })
    }
}

export function fetchStockDetailedData(symbol) {
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/stats`
  return (dispatch) => {
    dispatch({type: 'LOADING_DETAILED_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'FETCH_DETAILED_DATA', payload: responseJSON})
      })
    }
}

export function fetchStockHistory(symbol) {
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/chart/5d`
  return (dispatch) => {
    dispatch({type: 'LOADING_HISTORY_DATA'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'FETCH_HISTORY_DATA', payload: responseJSON})
      })
    }
}
