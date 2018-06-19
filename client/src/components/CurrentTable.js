import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link , withRouter } from 'react-router-dom';

const CurrentTable = ({stocks, history}) => {
  const renderStocks = stocks.map(stock =>
    <Link to={`/${stock.symbol}`}>{stock.symbol}</Link>
  );
  var options = {
   onRowClick: function(row){
     history.push(`/${row.symbol}`)
   }
  }

  return (
    <div>
    <BootstrapTable data={stocks} options={options} >
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

export default withRouter(CurrentTable);
