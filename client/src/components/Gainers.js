import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const Gainers = ({gainers}) => {

  return (
    <div className="container-fluid" >
      <div className="row" >
        <p>{gainers[0].symbol}</p>
      </div>
    </div>


  )
}


export default Gainers;
