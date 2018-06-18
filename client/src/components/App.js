import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Home from '../containers/Home'
import '../App.css';
import * as actions from '../actions/stockActions.js'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class App extends Component {
  componentDidMount() {
    this.props.actions.fetchStockData()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <p>{this.props.delayedPrice}</p>
        </div>
      </Router>
    )
  }

}

function mapStateToProps(state) {
  return ({
    delayedPrice: state.stock.delayedPrice
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
