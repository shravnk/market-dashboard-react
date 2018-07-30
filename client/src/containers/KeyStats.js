import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/stockActions'
import KeyStatsTable from '../components/KeyStatsTable'
import StockHistory from '../components/StockHistory'
import SelectDateRange from '../components/SelectDateRange'


class KeyStats extends Component {

  componentDidMount() {
    this.props.actions.fetchStockDetailedData(this.props.symbol)
    this.props.actions.fetchStockHistory(this.props.symbol, '1D')
  }

  render() {
    let stockData = {}
    if (this.props.stocks.detailedData) {
      stockData = this.props.stocks.detailedData
      return (
        <div className="container">
          <h3 className="text-left">{stockData.companyName} ({stockData.symbol})</h3>
          <SelectDateRange symbol={this.props.stocks.detailedData.symbol} setRange={this.props.actions.fetchStockHistory}/>
          <div className="row" >
            <div className="col-md-5" >
              <KeyStatsTable stockData={stockData} display={true}/>
            </div>
            <div className="col-md-7" >
              <StockHistory historyData={this.props.stocks.historyData} period={this.props.stocks.historyPeriod}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    symbol: ownProps.match.params.symbol,
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyStats)
