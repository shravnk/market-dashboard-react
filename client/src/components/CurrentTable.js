import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const CurrentTable = ({stocks}) => {
  const renderStocks = stocks.map(stock =>
    <Link to={`/${stock.symbol}`}>{stock.symbol}</Link>
  );
  return (
    <div>
    <BootstrapTable data={stocks} >
      <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField='latestPrice'>Last Price</TableHeaderColumn>
      <TableHeaderColumn dataField='changePercent' dataSort>% Change</TableHeaderColumn>
      <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
      <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
    </BootstrapTable>
    {renderStocks}
    </div>


  )
}

export default CurrentTable;
