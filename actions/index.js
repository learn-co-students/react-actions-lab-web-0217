'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let table=this.state.table
  table.forEach((row) => row.push(""))
  this.setState({
    table: table
  })
}

function addRow (ev) {
  ev.preventDefault()
  let table=this.state.table
  let columns=table[0].length
  let newRow=[]
  let i=0
  while (i<columns) {
  newRow.push('')
  i++
  }
  table.push(newRow)
  this.setState({
    table: table
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  debugger
  let value=ev.target.value
  let table=this.state.table
  table[rowIndex][columnIndex]=value
  this.setState({
    table: table
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
  let table=this.state.table
  if (table.length>1) {
    table=table.slice(0,table.length-1)
    this.setState({
      table: table
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  let table=this.state.table
  if (table[0].length>1) {
    table = table.map((row) => row.slice(0,row.length-1))
    this.setState({
      table: table
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
