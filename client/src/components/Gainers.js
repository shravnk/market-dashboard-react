import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const Gainers = ({gainers, history}) => {
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
      <BootstrapTable data={gainers} hover={true} options={options}>
        <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField='companyName' dataSort>Name</TableHeaderColumn>
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

export default withRouter(Gainers);
