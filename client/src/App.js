import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home'
import './App.css';
import KeyStats from './containers/KeyStats.js'
import UserForm from './containers/UserForm'


class App extends Component {
  render() {
    if (this.props.currentUser.auth_success) {
    return (
        <NavBar currentUser={this.props.currentUser} />
        <div className="App">
          <Switch>
            <Redirect from="/" exact to="/home"/>
            <Redirect from="/login" exact to="/home"/>
            <Redirect from="/signup" exact to="/home"/>
            <Route exact path={`/home`} component={Home} />
            <Route path={`/:symbol`} component={KeyStats} />
          </Switch>
        </div>
    )
    } else {
      return(
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Redirect from="/home" exact to="/login" />
          <Route exact path={`/signup`} component={UserForm} />
          <Route exact path={`/login`} component={UserForm} />
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
