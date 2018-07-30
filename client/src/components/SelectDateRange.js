import React from 'react';


const SelectDateRange = ({symbol, setRange}) => {

  const onCellClick = (e) => {
    unhighlight()
    e.target.style.backgroundColor = "#b5ddc5"
    setTimeout(setRange(symbol, e.target.innerHTML),100)
  }

  const styles = {backgroundColor: '#b5ddc5'}

  return (
    <div className="row">
      <div className="col-md-8" >
      </div>
      <div className="col-md-4" >
        <table id="range-options" className="table table-sm table-bordered">
          <tr>
            <td style={styles} onClick={(e) => onCellClick(e)}>1D</td>
            <td onClick={(e) => onCellClick(e)}>5D</td>
            <td onClick={(e) => onCellClick(e)}>1M</td>
            <td onClick={(e) => onCellClick(e)}>1Y</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

function unhighlight() {
  var table = document.getElementById('range-options');
  var cells = table.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
  }


export default SelectDateRange;
