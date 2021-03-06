import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home'
import MarketOverview from './containers/MarketOverview'
import './App.css';
import KeyStats from './containers/KeyStats'
import UserForm from './containers/UserForm'
import StocksManager from './containers/StocksManager'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    if (this.props.currentUser.auth_success) {
    return (

        <div className="App">
        <NavBar currentUser={this.props.currentUser} />
          <Switch>
            <Redirect from="/" exact to="/home"/>
            <Redirect from="/login" exact to="/home"/>
            <Redirect from="/signup" exact to="/home"/>
            <Route exact path={`/home`} component={Home} />
            <Route exact path={`/overview`} component={MarketOverview} />
            <Route path={`/manage`} component={StocksManager} />
            <Route path={`/stocks/:symbol`} component={KeyStats} />

          </Switch>
        </div>
    )
    } else {
      return(
      <div className="App">
        <NavBar currentUser={this.props.currentUser} />
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Redirect from="/home" exact to="/login" />
          <Route exact path={`/signup`} component={UserForm} />
          <Route exact path={`/login`} component={UserForm} />
          <Route exact path={`/home`} component={Home} />
        </Switch>
      </div>
    )
    }
  }

}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(App))
