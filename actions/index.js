'use strict';

function addColumn (e) {
  e.preventDefault()
  let newTable = []
  this.state.table.forEach((row) => {
    newTable.push([...row, ''])
  })
  this.setState({
    table: newTable
  })
}

function addRow (e) {
  e.preventDefault()
  let newRow = this.state.table[0].map(() => '')
  console.log(newRow)
  this.setState({
    table: [...this.state.table, newRow]
  })
}

function changeCell (x, y, e) {
  //value in e.target.value
  let newTable = this.state.table
  newTable[x][y] = e.target.value
  this.setState({
    table: newTable
  })
}

function focusCell (x, y) {
  this.setState({
    focused: [x, y]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (e) {
  e.preventDefault()
  // catch corner case
  if (this.state.table.length <= 1) return
  //nice js syntax trick:
  // A negative index can be used, indicating an offset from the end of the sequence.
  // slice(2,-1) extracts the third element through the second-to-last element in the sequence.
  // let newTable = this.state.table.slice(0, this.state.table.length - 1)
  let newTable = this.state.table.slice(0, -1)
  this.setState({
    table: newTable
  })
}

function removeColumn (e) {
  e.preventDefault()
  if (this.state.table.length <= 1 || this.state.table[0].length <= 1) return // moar corner case
  let newTable = this.state.table.map((r) => r.slice(0, -1))
  this.setState({
    table: newTable
  })
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
