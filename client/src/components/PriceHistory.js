import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

const PriceHistory = ({historyData, display}) => {

  if(display) {
    const historyRows = historyData.map(day => <tr><td>{day.date}</td><td>{day.close}</td></tr>)
    const historyValues = historyData.map(day => day.close)
    const historyLabels = historyData.map(day => day.date)
    const chartData = Object.assign({}, {labels: historyLabels, datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: historyValues,
        }]})
    return (
      <div>
        < Line data={chartData} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default PriceHistory;
