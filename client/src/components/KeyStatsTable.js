import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const KeyStatsTable = ({stockData}) => {
  const formattedStockData = formatStockDetails(stockData)
  return (
    <div>
    <div className="row" >
    <div className="col-sm-4">
    <table className="table">
      <tr>
        <td>Market Cap</td>
        <td>$ {formattedStockData.marketcap} bn</td>
      </tr>
      <tr>
        <td>Price to Book</td>
        <td>{formattedStockData.priceToBook}</td>
      </tr>
      <tr>
        <td>Price to Sales</td>
        <td>{formattedStockData.priceToSales}</td>
      </tr>
    </table>
    </div>
    <div className="col-sm-4">
    <table className="table">
      <tr>
        <td>Beta</td>
        <td>{formattedStockData.beta}</td>
      </tr>
      <tr>
        <td>52 Week High</td>
        <td>{formattedStockData.week52high}</td>
      </tr>
      <tr>
        <td>52 Week Low</td>
        <td>{formattedStockData.week52low}</td>
      </tr>
      <tr>
        <td>200 Day Moving Avg </td>
        <td>{formattedStockData.day200MovingAvg}</td>
      </tr>
      <tr>
        <td>50 Day Moving Avg</td>
        <td>{formattedStockData.day50MovingAvg}</td>
      </tr>
      </table>
      </div>
      <div className="col-sm-4">
      <table className="table">
        <tr>
          <td>EPS (ttm)</td>
          <td>{formattedStockData.ttmEPS}</td>
        </tr>
        <tr>
          <td>Dividend Yield</td>
          <td>{formattedStockData.dividendYield}</td>
        </tr>
        <tr>
          <td>ROE</td>
          <td>{formattedStockData.returnOnEquity}</td>
        </tr>
      </table>
      </div>
    </div>
    </div>


  )
}

export function formatStockDetails(stockData) {
  let returnData = {}
  if (stockData.marketcap !== null && stockData.marketcap !== undefined) {
    returnData.marketcap = (stockData.marketcap / 1000000000).toFixed(3)
  }

  if (stockData.priceToBook !== null && stockData.priceToBook !== undefined) {
    returnData.priceToBook = stockData.priceToBook.toFixed(3)
  }
  if (stockData.priceToSales !== null && stockData.priceToSales !== undefined) {
    returnData.priceToSales = stockData.priceToSales.toFixed(3)
  }
  if (stockData.beta !== null && stockData.beta !== undefined) {
    returnData.beta = stockData.beta.toFixed(3)
  }

  if (stockData.week52high !== null && stockData.week52high !== undefined) {
    returnData.week52high = stockData.week52high.toFixed(3)
  }

  if (stockData.week52low !== null && stockData.week52low !== undefined) {
    returnData.week52low = stockData.week52low.toFixed(3)
  }

  if (stockData.day200MovingAvg !== null && stockData.day200MovingAvg !== undefined) {
    returnData.day200MovingAvg = stockData.day200MovingAvg.toFixed(3)
  }

  if (stockData.day50MovingAvg !== null && stockData.day50MovingAvg !== undefined) {
    returnData.day50MovingAvg = stockData.day50MovingAvg.toFixed(3)
  }

  if (stockData.ttmEPS !== null && stockData.ttmEPS !== undefined) {
    returnData.ttmEPS = stockData.ttmEPS.toFixed(3)
  }

  if (stockData.returnOnEquity !== null && stockData.returnOnEquity !== undefined) {
    returnData.returnOnEquity = stockData.returnOnEquity.toFixed(3)
  }

  if (stockData.dividendYield !== null && stockData.dividendYield !== undefined) {
    returnData.dividendYield = stockData.dividendYield.toFixed(3)
  }

  return returnData
}

export default KeyStatsTable;
