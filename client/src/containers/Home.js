import React, { Component } from 'react';
import CurrentTable from '../components/CurrentTable'
import PriceHistory from '../components/PriceHistory'
import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

class Home extends Component  {

  componentWillMount() {
    this.props.actions.clearHistoryData()
  }
  componentDidMount() {
    this.props.actions.fetchStocksCurrentData(this.props.user.stocks)
  }

  render() {
    let stocksData = []
    let sectorList = {}
    if (this.props.stocks.currentData) {
      stocksData = this.props.stocks.currentData
      const sectorArr = [...new Set(stocksData.map(s => s.sector))]
      sectorList = arrayToObject(sectorArr)
    }
    let historyData = []
    if (this.props.stocks.historyData) {
      historyData = this.props.stocks.historyData
    }

    return (
      <div className="container-fluid" >
      <div id="Home" className="row">
        <div className="col-md-8" >
          <CurrentTable stocks={stocksData} sectors={sectorList} fetchHistory={this.props.actions.fetchStockHistory}  clearHistory={this.props.actions.clearHistoryData}
          fetchData={this.props.actions.fetchStockDetailedData}/>
        </div>
        <div className="col-md-4 offset-md-8 text-center" style={{position:'fixed'}}>
          <br/>
          <PriceHistory historyData={historyData} symbol={this.props.stocks.historySymbol} display={this.props.stocks.showHistory}
          loading={this.props.stocks.historyLoading}/>
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

const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item] = item
     return obj
   }, {})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
