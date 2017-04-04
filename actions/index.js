'use strict';

function addColumn(ev) {
  ev.preventDefault()
  let newTable = Object.assign([], this.state.table)
  newTable.map((row) => {
    return row.push('')
  })
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  let newTable = Object.assign([], this.state.table)
  newTable.push(Array(newTable[0].length).join(",").split(","))
  this.setState({
    table: newTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let newTable = Object.assign([], this.state.table)
  newTable[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: newTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  let newTable = Object.assign([], this.state.table)
  if (newTable.length > 1) {
    newTable.splice(-1,1)
  this.setState({
    table: newTable
  })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  let newTable = Object.assign([], this.state.table)
  if (newTable[0].length > 1) {
  newTable.map((row) => {
    row.splice(-1,1)
    return row
  })
  this.setState({
    table: newTable
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
