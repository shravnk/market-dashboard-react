import fetch from 'isomorphic-fetch'

export function fetchStocksCurrentData() {
  const stockList = ["AAPL", "FB", "C"].join(",")
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockList}&types=quote`
  return (dispatch) => {
    dispatch({type: 'LOADING_STOCK'})
    return fetch(url).then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'FETCH_CURRENT_DATA', payload: responseJSON})
      })
    }
}
