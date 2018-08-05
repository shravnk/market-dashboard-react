import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const CurrentTable = ({stocks,
                      sectors,
                      fetchHistory,
                      fetchData,
                      clearHistory,
                      history
                      }) => {

  const options = {
   onRowClick: function(row){
     fetchData(row.symbol)
     history.push(`/stocks/${row.symbol}`)
   },
   onRowMouseOver: function(row){
     clearHistory()
     setTimeout(fetchHistory(row.symbol, '5d'), 100)
   },
   onRowMouseOut: function(row) {
     setTimeout(clearHistory(), 100)
   },
   sortName: 'symbol',
   sortOrder: 'asc'
  }

  return (
    <div>
    <BootstrapTable data={stocks} options={options} hover={true} condensed striped>
      <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField='latestPrice' dataAlign='right'>Last Price</TableHeaderColumn>
      <TableHeaderColumn dataField='changePercent' dataSort sortFunc={ numericSortFunc } dataAlign='right'>% Change</TableHeaderColumn>
      <TableHeaderColumn dataField='high' dataAlign='right'>High</TableHeaderColumn>
      <TableHeaderColumn dataField='low' dataAlign='right'>Low</TableHeaderColumn>
      <TableHeaderColumn headerText={'Sector'} dataAlign='right' dataField='sector' filter={ { type: 'SelectFilter', options: sectors} }></TableHeaderColumn>
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
