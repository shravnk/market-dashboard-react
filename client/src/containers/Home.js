import React, { Component } from 'react';
import { Switch, Route, Router } from "react-router-dom";
import CurrentTable from '../components/CurrentTable.js'
import * as actions from '../actions/stockActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class Home extends Component  {
  componentDidMount() {
    this.props.actions.fetchStocksCurrentData()
  }
  render() {
    let stocksData = []
    if (this.props.stocks.currentData) {
      stocksData = this.props.stocks.currentData
    }
    
    return (
      <div id="Home">
        <h1>Home</h1>
        <CurrentTable stocks={stocksData} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Home)
