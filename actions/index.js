'use strict';

function addColumn (ev) {
  ev.preventDefault()
  const addColToRow = this.state.table.map(row => [...row, ''])

  this.setState({
    table: addColToRow
  })
}

function addRow (ev) {
  ev.preventDefault()
  let addedRow = [...this.state.table, ['','']]

  this.setState({
    table: addedRow
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let newTable = this.state.table
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
  if(this.state.table.length !== 1){
    let removedRow = this.state.table.slice(0, -1)

    this.setState({
      table: removedRow
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  if(this.state.table[0].length !== 1){
    let newTable = this.state.table.map(row => row.slice(0, -1))

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
