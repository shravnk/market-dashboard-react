import React, { Component } from 'react';
import CurrentTable from '../components/CurrentTable'
import PriceHistory from '../components/PriceHistory'
import * as actions from '../actions/stockActions'
import { upvoteStock } from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'



class Home extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.user.stocks.map(stock => ({symbol: stock.symbol, voteCount: 0}))
    }
  }

  componentDidMount() {
    this.props.actions.fetchStocksCurrentData(this.props.user.stocks)
  }

  handleUpvote = (e, symbol) => {
    e.stopPropagation()
    let upvotes = [...this.state.upvotes]
    let upvote = upvotes.find(stock => stock.symbol === symbol)
    upvote.voteCount += 1
    this.setState({
      upvotes: upvotes
    })
  }

  upvoteTest = () => {
    const data = {
      username: this.props.user.username,
      symbol: 'AAPL'
    }
    this.props.upvoteStock(data)
  }

  render() {
    let stocksData = []
    let mergedData = []
    if (this.props.stocks.currentData) {
      stocksData = this.props.stocks.currentData
      const upvotes = this.state.upvotes
      stocksData.forEach((stock, i) => {
        mergedData.push(Object.assign({}, stock, upvotes[i]))
      })
    }

    let historyData = []
    if (this.props.stocks.historyData) {
      historyData = this.props.stocks.historyData
    }

    return (
      <div className="container-fluid" >
      <button onClick={this.upvoteTest}>Try me</button>
      <div id="Home" className="row">
        <div className="col-sm-8" >
        <CurrentTable stocks={mergedData} fetchHistory={this.props.actions.fetchStockHistory} handleUpvote={this.handleUpvote} />
        </div>
        <div className="col-sm-4 offset-sm-8" style={{position:'fixed'}}>
        <PriceHistory historyData={historyData} display={this.props.stocks.showHistory} />
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    stocks: state.stocks,
    user: state.currentUser
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(actions, dispatch),
    upvoteStock: bindActionCreators(upvoteStock, dispatch)
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
