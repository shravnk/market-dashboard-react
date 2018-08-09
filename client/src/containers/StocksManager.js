import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddStocksForm from '../components/AddStocksForm'
import {addStocks} from '../actions/userActions.js'
import {deleteMessage} from '../actions/userActions'


export class StocksManager extends Component {

  componentWillUnmount() {
    this.props.deleteMessage()
  }

  render() {
    return(
      <div>
        <AddStocksForm currentUser={this.props.currentUser} addStocks={this.props.addStocks} message={this.props.message} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    currentUser: state.currentUser.username,
    message: state.currentUser.messageSuccess
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addStocks: addStocks,
    deleteMessage: deleteMessage }
    , dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(StocksManager)
