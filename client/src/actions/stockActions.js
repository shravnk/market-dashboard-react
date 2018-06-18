import fetch from 'isomorphic-fetch'

export function fetchStockData() {
  return (dispatch) => {
    dispatch({type: 'LOADING_STOCK'})
    return fetch('https://api.iextrading.com/1.0/stock/AAPL/delayed-quote').then(response => {
      return response.json()}).then(responseJSON => {
        dispatch({type: 'FETCH_DELAYED_PRICE', payload: responseJSON.delayedPrice})
  })
}
}
