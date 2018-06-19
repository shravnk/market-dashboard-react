import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const KeyStatsTable = ({stockData}) => {

  return (
    <div>
    <div className="row" >
    <div className="col-sm-4">
    <table className="table">
      <tr>
        <td>Market Cap</td>
        <td>{stockData.marketcap}</td>
      </tr>
      <tr>
        <td>Price to Book</td>
        <td>{stockData.priceToBook}</td>
      </tr>
      <tr>
        <td>Price to Sales</td>
        <td>{stockData.priceToSales}</td>
      </tr>
    </table>
    </div>
    <div className="col-sm-4">
    <table className="table">
      <tr>
        <td>Beta</td>
        <td>{stockData.beta}</td>
      </tr>
      <tr>
        <td>52 Week High</td>
        <td>{stockData.week52high}</td>
      </tr>
      <tr>
        <td>52 Week Low</td>
        <td>{stockData.week52low}</td>
      </tr>
      <tr>
        <td>200 Day Moving Avg </td>
        <td>{stockData.day200MovingAvg}</td>
      </tr>
      <tr>
        <td>50 Day Moving Avg</td>
        <td>{stockData.day50MovingAvg}</td>
      </tr>
    </table>
    </div>
    </div>
    </div>


  )
}

export default KeyStatsTable;
