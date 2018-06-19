import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




const Home = ({stocks}) => {
    let stocksData = []
    if (stocks.currentData) {
      stocksData = stocks.currentData.map((stock) => ({ symbol: stock.quote.symbol,
         latestPrice: stock.quote.latestPrice }))
    }


    return (
      <div id="Home">
        <h1>Home</h1>
        <BootstrapTable data={stocksData} >
          <TableHeaderColumn isKey={true} dataField='symbol'>Symbol</TableHeaderColumn>
          <TableHeaderColumn dataField='latestPrice'>Last Price</TableHeaderColumn>
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
