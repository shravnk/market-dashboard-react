import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const KeyStatsTable = ({stockData, display}) => {

  if (display==true && stockData) {
  const formattedStockData = formatStockDetails(stockData)
  return (
      <div className="col-md-10">
        <table className="table text-left">
          <tr>
            <td>Market Cap</td>
            <td className="text-right">$ {formattedStockData.marketcap} bn</td>
          </tr>
          <tr>
            <td>Beta</td>
            <td className="text-right">{formattedStockData.beta}</td>
          </tr>
          <tr>
            <td>52 Week Range</td>
            <td className="text-right">{formattedStockData.week52low} - {formattedStockData.week52high}</td>
          </tr>
          <tr>
            <td>EPS (ttm)</td>
            <td className="text-right">{formattedStockData.ttmEPS}</td>
          </tr>
          <tr>
            <td>Dividend Rate (Yield)</td>
            <td className="text-right">{formattedStockData.dividendRate} ({formattedStockData.dividendYield}) </td>
          </tr>
          <tr>
            <td>Return on Equity</td>
            <td className="text-right">{formattedStockData.returnOnEquity}</td>
          </tr>
          <tr>
            <td>Price to Book</td>
            <td className="text-right">{formattedStockData.priceToBook}</td>
          </tr>
        </table>
      </div>
  )
} else {
  return (
    <div></div>
  )
}
}

export function formatStockDetails(stockData) {
  let returnData = {}
  if (stockData.marketcap !== null && stockData.marketcap !== undefined) {
    returnData.marketcap = (stockData.marketcap / 1000000000).toFixed(3)
  }

  if (stockData.priceToBook !== null && stockData.priceToBook !== undefined) {
    returnData.priceToBook = stockData.priceToBook.toFixed(2)
  }
  if (stockData.priceToSales !== null && stockData.priceToSales !== undefined) {
    returnData.priceToSales = stockData.priceToSales.toFixed(2)
  }
  if (stockData.beta !== null && stockData.beta !== undefined) {
    returnData.beta = stockData.beta.toFixed(3)
  }

  if (stockData.week52high !== null && stockData.week52high !== undefined) {
    returnData.week52high = stockData.week52high.toFixed(2)
  }

  if (stockData.week52low !== null && stockData.week52low !== undefined) {
    returnData.week52low = stockData.week52low.toFixed(2)
  }

  if (stockData.ttmEPS !== null && stockData.ttmEPS !== undefined) {
    returnData.ttmEPS = stockData.ttmEPS.toFixed(2)
  }

  if (stockData.returnOnEquity !== null && stockData.returnOnEquity !== undefined) {
    returnData.returnOnEquity = stockData.returnOnEquity.toFixed(2)
  }

  if (stockData.dividendYield !== null && stockData.dividendYield !== undefined) {
    returnData.dividendYield = stockData.dividendYield.toFixed(2)
  }

  if (stockData.dividendRate !== null && stockData.dividendRate !== undefined) {
    returnData.dividendRate = stockData.dividendRate.toFixed(2)
  }

  return returnData
}

export default KeyStatsTable;
