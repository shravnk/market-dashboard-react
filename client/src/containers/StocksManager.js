import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import AddStocksForm from '../components/AddStocksForm'
import {addStocks} from '../actions/userActions.js'


class StocksManager extends Component {
  render() {
    return(
      <AddStocksForm currentUser={this.props.currentUser} addStocks={this.props.addStocks} />
    )
  }
}

function mapStateToProps(state) {
  return ({
    currentUser: state.currentUser.username
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addStocks: addStocks}
    , dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StocksManager))
