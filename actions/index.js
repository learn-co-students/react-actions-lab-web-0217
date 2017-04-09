'use strict';

function addColumn (ev) {
  ev.preventDefault()
  const augmented_table = this.state.table.map(row => [...row, ""])
  this.setState({
    table: augmented_table
  })
}

function addRow (ev) {
  ev.preventDefault()
  this.setState({
    table: [...this.state.table, this.state.table[0].map(()=>"")]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedRow = [...this.state.table[rowIndex]];
  updatedRow.splice(columnIndex, 1, ev.target.value);
  this.state.table.splice(rowIndex, 1, updatedRow);
  this.setState({
    table: this.state.table
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused:[
      rowIndex, columnIndex
    ]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  const rowless = this.state.table.slice(0,-1)
  if(this.state.table.length > 1){
    this.setState({
      table: rowless
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  const columnless = this.state.table.map((row)=>row.slice(0,-1))
  if(this.state.table[0].length>1){
    this.setState({
      table: columnless
    })
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
