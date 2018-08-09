import React, { Component } from 'react';

export class SelectDateRange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlightRange: "1D"
    }
  }

  onCellClick = (range) => {
    if (range !== this.state.highlightRange) {
      this.props.setRange(this.props.symbol, range)
      this.setState({
        highlightRange: range
      })
    }
  }

  highlight = (range) => {
    if (range === this.state.highlightRange) {
      return '#b5ddc5'
    }
  }

  render() {
    const rangeOptions = ["1D","5D","1M","1Y"]
    const tableCells = rangeOptions.map((range, index) => <td key={index} id={"range-" + index} style={{backgroundColor: this.highlight(range)}} onClick={() => this.onCellClick(range)}>{range}</td>)
    return (
      <div className="row">
        <div className="col-md-8" >
        </div>
        <div className="col-md-4" >
          <table id="range-options" className="table table-sm table-bordered">
            <tbody>
              <tr>
                {tableCells}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )
    }
}


export default SelectDateRange;
