import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home'
import './App.css';
import KeyStats from './containers/KeyStats.js'
import UserForm from './containers/UserForm'


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`/signup`} component={UserForm} />
            <Route path={`/:symbol`} component={KeyStats} />
          </Switch>
        </div>
    )
  }

}



export default App
