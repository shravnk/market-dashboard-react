import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

const IndexHistory = ({indexData}) => {

  const historyValues = indexData.map(minute => minute.marketClose)
  const historyLabels = indexData.map(minute => minute.minute)
  const chartData = Object.assign({}, {labels: historyLabels, datasets: [{
      lineTension: 0,
      data: historyValues,
      }]})
  const chartOptions = {
    legend: {
      display: false
    }
  }
  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  )

}

export default IndexHistory;
