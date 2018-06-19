import React, { Component } from 'react';


const PriceHistory = ({historyData, display}) => {

  if(display) {
    const test = historyData[0].open
    return (
      <div>
      <p>{test}</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default PriceHistory;
