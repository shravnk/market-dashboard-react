import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";


const Home = ({delayedPrice}) => {

    return (
      <div id="Home">
        <h1>Home</h1>
        <p>{delayedPrice}</p>
      </div>
    )
  
}

function mapStateToProps(state) {
  return ({
    delayedPrice: state.stock.delayedPrice
  })
}


export default withRouter(connect(mapStateToProps)(Home));
