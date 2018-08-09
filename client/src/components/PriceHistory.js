import React from 'react';
import {Line} from 'react-chartjs-2'

const PriceHistory = ({historyData, symbol, display, ready}) => {

  if (display && ready) {

    const historyValues = historyData.map(day => day.close)
    const historyLabels = historyData.map(day => day.date)
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
        <h6>{symbol}</h6>
        <Line data={chartData} options={chartOptions} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default PriceHistory;
