import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";


const Home = ({stocksData}) => {
    
    return (
      <div id="Home">
        <h1>Home</h1>

        <p>Test</p>
      </div>
    )
}

function mapStateToProps(state) {
  return ({
    stocksData: state.stocks
  })
}


export default withRouter(connect(mapStateToProps)(Home));
