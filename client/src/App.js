import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Home from './containers/Home'
import './App.css';
import * as actions from './actions/stockActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import KeyStats from './containers/KeyStats.js'


class App extends Component {
  componentDidMount() {
    this.props.actions.fetchStocksCurrentData()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path={`/:symbol`} component={KeyStats} />
        </div>
      </Router>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}

export default connect(null, mapDispatchToProps)(App);
