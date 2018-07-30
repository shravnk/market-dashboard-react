import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const CurrentTable = ({stocks, fetchHistory, clearHistory, history}) => {

  const options = {
   onRowClick: function(row){
     history.push(`/stocks/${row.symbol}`)
   },
   onRowMouseOver: function(row){
     setTimeout(fetchHistory(row.symbol, '5d'), 100)
   },
   onRowMouseOut: function(row) {
     clearHistory()
   },
   sortName: 'symbol',
   sortOrder: 'asc'
  }

  return (
    <div>
    <BootstrapTable data={stocks} options={options} hover={true}>
      <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField='latestPrice'>Last Price</TableHeaderColumn>
      <TableHeaderColumn dataField='changePercent' dataSort sortFunc={ numericSortFunc }>% Change</TableHeaderColumn>
      <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
      <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
    </BootstrapTable>
    </div>


  )
}
function numericSortFunc(a, b, order) {
  if (order === 'desc') {
    return Number(b.changePercent) - Number(a.changePercent);
  } else {
    return Number(a.changePercent) - Number(b.changePercent);
  }
}
export default withRouter(CurrentTable);
