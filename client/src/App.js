import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Home from './containers/Home'
import './App.css';
import KeyStats from './containers/KeyStats.js'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path={`/:symbol`} component={KeyStats} />
          <Route exact path={`/signup`} component={UserForm} />
        </div>
      </Router>
    )
  }

}



export default App
