import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

export const IndexCurrent = ({indices, changeIndexDisplay}) => {

  const options = {
     onRowMouseOver: function(row){
       setTimeout(changeIndexDisplay(row.symbol), 100)
     }
  }

  return (
    <div className="container-fluid" >
      <div className="row" >
      <BootstrapTable data={indices} hover={true} options={options}>
        <TableHeaderColumn isKey={true} dataField='symbol' dataSort>ETF</TableHeaderColumn>
        <TableHeaderColumn dataAlign='right' dataField='changePercent' dataSort>% Chg</TableHeaderColumn>
      </BootstrapTable>
      </div>
    </div>
  )
}


export default withRouter(IndexCurrent);
