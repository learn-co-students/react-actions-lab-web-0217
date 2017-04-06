'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const newTable = this.state.table
  const mapped = newTable.map((row) => {
    row.push('')
    return row
  })
  this.setState({
    table: mapped
  })
}

function addRow (ev) {
  ev.preventDefault();
  const newTable = this.state.table
  newTable.push(Array(newTable[0].length).join(".").split("."))
  this.setState({
    table: newTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const newTable = this.state.table
  newTable[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: newTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState ({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault();
  const newTable = this.state.table
  if (newTable.length > 1) {
    newTable.splice(-1, 1)
    this.setState({
      table: newTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  const newTable = this.state.table
  if (newTable[0].length > 1) {
    const mapped = newTable.map((row) => {
      row.splice(-1, 1)
      return row
    })
    this.setState({
      table: mapped
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
