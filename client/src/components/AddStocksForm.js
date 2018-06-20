import React from 'react'
import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

const AddStocksForm = ({ currentUser, addStocks }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      'symbol': this.symbol.value
    }
    loginUser(data)
  }
  return(
    <div>
      <h1>Add Stock</h1>
        <form onSubmit={handleSubmit.bind(this)}>
        <div>
          <label>Ticker:</label>
          <input type="text" ref = {node => this.symbol = node} />
        </div>
        <br></br>
        <button type="submit" label="submit">Login</button>
      </form>
    </div>
  )
}



export default withRouter(AddStocksForm)
