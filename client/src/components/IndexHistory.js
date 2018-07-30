import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

const IndexHistory = ({indexData}) => {
  const historyValues = indexData.chart.map(minute => minute.marketOpen)
  const historyLabels = indexData.chart.map(minute => minute.minute)
  const chartData = Object.assign({}, {labels: historyLabels, datasets: [{
      lineTension: 0,
      data: historyValues,
      }]})
  const chartOptions = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: indexData.company.companyName
    }
  }
  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  )

}

export default IndexHistory;
