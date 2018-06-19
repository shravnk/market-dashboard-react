import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

const PriceHistory = ({historyData, display}) => {

  if(display) {
    const historyRows = historyData.map(day => <tr><td>{day.date}</td><td>{day.close}</td></tr>)
    const historyValues = historyData.map(day => day.close)
    const historyLabels = historyData.map(day => day.date)
    const chartData = Object.assign({}, {labels: historyLabels, datasets: [{
        lineTension: 0,
        data: historyValues,
        }]})
    const chartOptions = {
      responsive: false
    }
    return (
      <div>
        < Line data={chartData} height={500} width={700} options={chartOptions} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default PriceHistory;
