import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Switch, Route, Router } from "react-router-dom";
import CurrentTable from '../components/CurrentTable.js'



const Home = ({match, stocks}) => {
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
        <CurrentTable stocks={stocksData} />
      </div>
    )
}

function mapStateToProps(state) {
  return ({
    stocks: state.stocks
  })
}


export default connect(mapStateToProps)(Home)
