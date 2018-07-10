import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const CurrentTable = ({stocks, fetchHistory, history, handleUpvote}) => {

  const options = {
   onRowClick: function(row){
     history.push(`/stocks/${row.symbol}`)
   },
   onRowMouseOver: function(row){
     setTimeout(fetchHistory(row.symbol), 100)
   }
  }

  const buttonFormatter = () => {
    return (
      <button
        className="btn btn-secondary"
        onClick={handleUpvote}
      >
      Upvote
      </button>
    )
  }

  return (
    <div>
    <BootstrapTable data={stocks} options={options} hover={true}>
      <TableHeaderColumn isKey={true} dataField='symbol' dataSort>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField='latestPrice'>Last Price</TableHeaderColumn>
      <TableHeaderColumn dataField='changePercent' dataSort>% Change</TableHeaderColumn>
      <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
      <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
      <TableHeaderColumn dataField='voteCount' dataSort>Votes</TableHeaderColumn>
      <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}>Vote</TableHeaderColumn>
    </BootstrapTable>
    </div>


  )
}

export default withRouter(CurrentTable);
