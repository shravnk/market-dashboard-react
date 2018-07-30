import React, { Component } from 'react';
import CurrentTable from '../components/CurrentTable'
import PriceHistory from '../components/PriceHistory'
import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class Home extends Component  {
  componentDidMount() {
    this.props.actions.fetchStocksCurrentData(this.props.user.stocks)
    this.props.actions.clearHistoryData()
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
      <div className="container-fluid" >
      <div id="Home" className="row">
        <div className="col-md-8" >
        <CurrentTable stocks={stocksData} fetchHistory={this.props.actions.fetchStockHistory} clearHistory={this.props.actions.clearHistoryData}/>
        </div>
        <div className="col-md-4 offset-sm-8" style={{position:'fixed'}}>
        <PriceHistory historyData={historyData} display={this.props.stocks.showHistory} />
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    stocks: state.stocks,
    user: state.currentUser
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
