'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let table = this.state.table.map((row,i) => row.concat(''))
  this.setState({table: table})
}

function addRow (ev) {
  ev.preventDefault()
  let newRow = [Array(this.state.table[0].length).join('.').split('.')]
  let table = this.state.table.concat(newRow)
  this.setState({table: table})
}

function changeCell (rowIndex, columnIndex, ev) {
  let table = this.state.table
  table[rowIndex][columnIndex] = ev.target.value
  this.setState({table: table})
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused: [rowIndex, columnIndex]})
}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  ev.preventDefault()
  let table = this.state.table
  table.pop()
  table.length > 0 ? this.setState({table: table}) : null
}

function removeColumn (ev) {
  ev.preventDefault()
  let table = this.state.table
  if (table[0].length > 1) {
    table = table.map((row) => {
      return row.slice(0,row.length-1)
    })
    this.setState({table: table})
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
