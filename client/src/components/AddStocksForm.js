import React from 'react'
import { withRouter } from 'react-router-dom'

const AddStocksForm = ({ currentUser, addStocks, message }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      'symbol': this.symbol.value,
      'username': currentUser
    }
    addStocks(data)
    var form = document.getElementById("input-form");
    form.reset();
  }
  return(
    <div>
      <h1>Add Stock</h1>
        <form id="input-form" onSubmit={handleSubmit.bind(this)}>
        <div>
          <label>Ticker:</label>
          <input type="text" ref = {node => this.symbol = node} />
        </div>
        <br></br>
        <button type="submit" label="submit">Add Stock</button>
      </form>
      <p>{message}</p>
    </div>
  )
}



export default withRouter(AddStocksForm)
