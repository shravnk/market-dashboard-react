import React, { Component } from 'react';
import Gainers from '../components/Gainers'
import Losers from '../components/Losers'
import IndexCurrent from '../components/IndexCurrent'
import * as actions from '../actions/stockActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class MarketOverview extends Component  {

  componentDidMount() {
    this.props.actions.fetchGainersData()
    this.props.actions.fetchLosersData()
    this.props.actions.fetchIndicesCurrentData()
  }

  render() {
    const loading = this.props.gainers && this.props.gainers.length === 0 && this.props.losers && this.props.losers.length === 0
    if (loading) {
      return (
        <p>Loading</p>
      )
    } else {
    return (
      <div className="container-fluid" >
        <div id="indices" className="row" >
          <div className="col-sm-4" >
            <IndexCurrent indices={this.props.indices} />
            // <IndexHistory indexData=
          </div>
        </div>
        <div id="Movers" className="row">
          <div className="col-sm-6" >
            <Gainers gainers={this.props.gainers} />
          </div>
          <div className="col-sm-6" >
            <Losers losers={this.props.losers} />
          </div>
        </div>
      </div>
    )
    }
  }
}

function mapStateToProps(state) {
  return ({
    gainers: state.stocks.gainerData,
    losers: state.stocks.loserData,
    indices: state.stocks.indexData
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketOverview))
