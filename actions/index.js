'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let currentTable = this.state.table
  let newTable = currentTable.map((row) => {
    row.push("")
    return row
  })
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  let currentTable = this.state.table
  currentTable.push(["",""])
  let newTable = currentTable
  this.setState({table: newTable})
}

function changeCell (rowIndex, columnIndex, ev) {
  let currentTable = this.state.table
  currentTable[rowIndex][columnIndex] = ev.target.value
  let newTable = currentTable
  this.setState({table: newTable})
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused: [rowIndex, columnIndex]})
}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  ev.preventDefault()
  let newTable = this.state.table
  if (newTable.length > 1){
    newTable.pop()
    this.setState({table: newTable})
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  let current = this.state.table
  if (current[0].length > 1){
    let newTable = current.map((row) => {
      row.pop()
      return row
    })
    this.setState({table: newTable})
  }
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
