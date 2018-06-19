import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';





const Home = ({stocks}) => {
    let stocksData = []
    if (stocks.currentData) {
      stocksData = stocks.currentData.map((stock) => ({
        symbol: stock.quote.symbol,
        latestPrice: stock.quote.latestPrice,
        changePercent: stock.quote.changePercent * 100,
        high: stock.quote.high,
        low: stock.quote.low
        }))
    }


    return (
      <div id="Home">
        <h1>Home</h1>
        <BootstrapTable data={stocksData} >
          <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
          <TableHeaderColumn dataField='latestPrice'>Last Price</TableHeaderColumn>
          <TableHeaderColumn dataField='changePercent' dataSort>% Change</TableHeaderColumn>
          <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
          <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
}

function mapStateToProps(state) {
  return ({
    stocks: state.stocks
  })
}


export default withRouter(connect(mapStateToProps)(Home));
