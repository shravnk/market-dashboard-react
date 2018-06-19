import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchStockDetailedData} from '../actions/stockActions.js'
import KeyStatsTable from '../components/KeyStatsTable'


class KeyStats extends Component {

  componentDidMount() {
    this.props.fetchData(this.props.symbol)
  }



  render() {
    let stockData = {}
    if (this.props.stocks.detailedData) {
      stockData = this.props.stocks.detailedData
    }
    return (
      <div className="container">
        <h3>{stockData.companyName}</h3>
        <KeyStatsTable stockData={stockData} />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    symbol: ownProps.match.params.symbol,
    stocks: state.stocks
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchData: fetchStockDetailedData }
    , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyStats)
