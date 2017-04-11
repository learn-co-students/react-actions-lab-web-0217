'use strict';

function addColumn (ev) {
  const table = this.state.table.map((row) => {
    return row.concat("")
  })
  this.setState({table})
  ev.preventDefault()
}

function addRow (ev) {
  const row = this.state.table[0].reduce((arr) => arr.concat(""),[])
  this.state.table.push(row)
  this.setState({table: this.state.table})
  ev.preventDefault()
}

function changeCell (rowIndex, columnIndex, ev) {
  const table = this.state.table
  table[rowIndex][columnIndex] = ev.target.value
  this.setState({table})
}

function focusCell (rowIndex, columnIndex) {
  let focused = [rowIndex, columnIndex]
  this.setState({focused})
}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  let table = this.state.table
  if(table.length > 1) {
    table.pop()
    this.setState({table})
  }
  ev.preventDefault();
}

function removeColumn (ev) {
  ev.preventDefault();
  if (this.state.table[0].length < 2) return
  let table = this.state.table.map((row) => row.slice(0,-1))
  this.setState({table})
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
