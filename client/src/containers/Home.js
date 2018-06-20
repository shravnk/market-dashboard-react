import React, { Component } from 'react';
import CurrentTable from '../components/CurrentTable'
import PriceHistory from '../components/PriceHistory'
import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class Home extends Component  {
  componentDidMount() {
    this.props.actions.fetchStocksCurrentData()
  }
  render() {
    let stocksData = []
    if (this.props.stocks.currentData) {
      stocksData = this.props.stocks.currentData
    }
    let historyData = []
    if (this.props.stocks.historyData) {
      historyData = this.props.stocks.historyData
    }

    return (
      <div id="Home">
        <h1>Home</h1>
        <CurrentTable stocks={stocksData} fetchHistory={this.props.actions.fetchStockHistory} />
        <PriceHistory historyData={historyData} display={this.props.stocks.showHistory} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    stocks: state.stocks
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
