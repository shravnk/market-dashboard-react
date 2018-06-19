import React, { Component } from 'react';


const PriceHistory = ({historyData, display}) => {

  if(display) {
    const historyRows = historyData.map(day => <tr><td>{day.date}</td><td>{day.close}</td></tr>)
    return (
      <div>
        <table className="table">
          {historyRows}
        </table>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default PriceHistory;
