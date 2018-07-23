import React, { Component } from 'react';

import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class MarketOverview extends Component  {


  render() {
    return (
      <div className="container-fluid" >
      <div id="Overview" className="row">
        <p>Test</p>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    user: state.currentUser
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketOverview))
