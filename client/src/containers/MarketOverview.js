import React, { Component } from 'react';
import Gainers from '../components/Gainers'
import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class MarketOverview extends Component  {

  componentDidMount() {
    this.props.actions.fetchGainersData()
  }

  render() {
    const loading = this.props.gainers && this.props.gainers.length === 0
    if (loading) {
      return (
        <p>Loading</p>
      )
    } else {
    return (
      <div className="container-fluid" >
      <div id="Overview" className="row">
        <Gainers gainers={this.props.gainers} />
      </div>
      </div>
    )
    }
  }
}

function mapStateToProps(state) {
  return ({
    gainers: state.stocks.gainerData
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketOverview))
