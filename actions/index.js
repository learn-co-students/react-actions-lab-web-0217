'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let table = this.state.table
  table.map(row => row.push(''))
  this.setState({
    table: table
  })
}

function addRow (ev) {
  ev.preventDefault()
  let table = this.state.table
  let newRow = table[0].map(col => '')
  this.setState({
    table: [...this.state.table, newRow]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let value = ev.target.value
  let table = this.state.table
  table[rowIndex][columnIndex] = value
  this.setState({
    table
  })
}

function focusCell (rowIndex, columnIndex) {
  let focus = [rowIndex, columnIndex]
  this.setState({
    focused: focus
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  let table = this.state.table
  let row = table.length
  if (table.length > 1) {
    table.pop()
    this.setState({
      table
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  let table = this.state.table
  let column = table[0].length
  if (table[0].length > 1) {
    table.map(row => row.pop())
    this.setState({
      table
    })
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
