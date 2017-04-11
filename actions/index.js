'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let newTable = this.state.table.map((row) => {
    row.push('')
    return row
  })
  this.setState({
    table: newTable
  });
}

function addRow (ev) {
  ev.preventDefault()
  let newRow = []
  let rowLength = this.state.table[0].length

  for(var i=0; i < rowLength; i++){
    newRow.push('')
  }

  let tempTable = this.state.table

  tempTable.push(newRow)

  this.setState({
    table: tempTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let tempTable = this.state.table
  tempTable[rowIndex][columnIndex] = ev.target.value

  this.setState({
    table: tempTable
  })
}

function focusCell (rowIndex, columnIndex) {
  let focusedCell = [rowIndex, columnIndex]

  this.setState({
    focused: focusedCell
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  let tempTable = this.state.table
  if (tempTable.length > 1){
    tempTable.pop()

    this.setState({
      table: tempTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  let tempTable = this.state.table
  if (tempTable[0].length > 1){
    tempTable.map((row) => {
      row.pop()
    })

    this.setState({
      table: tempTable
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
