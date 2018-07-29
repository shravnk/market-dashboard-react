import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const Losers = ({losers, history}) => {
  const options = {
   onRowClick: function(row){
     history.push(`/stocks/${row.symbol}`)
   },
   defaultSortName: 'chgPct',
   defaultSortType: 'desc'
  }
  return (
    <div className="container-fluid" >
      <div className="row" >
      <BootstrapTable data={losers} hover={true} options={options}>
        <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField='latestPrice' dataSort>Last Price</TableHeaderColumn>
        <TableHeaderColumn dataField='chgPct' dataSort sortFunc={ numericSortFunc }>% Chg</TableHeaderColumn>
        <TableHeaderColumn dataField='high' dataSort>High</TableHeaderColumn>
        <TableHeaderColumn dataField='low' dataSort>Low</TableHeaderColumn>
      </BootstrapTable>
      </div>
    </div>
  )
}

function numericSortFunc(a, b, order) {
  if (order === 'desc') {
    return Number(b.chgPct) - Number(a.chgPct);
  } else {
    return Number(a.chgPct) - Number(b.chgPct);
  }
}

export default withRouter(Losers);
