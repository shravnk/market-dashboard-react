import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

const StockHistory = ({historyData, period}) => {

    if (historyData) {
      let historyValues = []
      let historyLabels = []
      if (period === "1D") {
        historyValues = historyData.map(min => min.open)
        historyLabels = historyData.map(min => min.minute)
      } else {
        historyValues = historyData.map(day => day.close)
        historyLabels = historyData.map(day => day.date)
      }
      const chartData = Object.assign({}, {labels: historyLabels, datasets: [{
          lineTension: 0,
          data: historyValues
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
    } else {
      return (
        <p>Loading</p>
      )
    }
}

export default StockHistory;
