'use strict';

function addColumn (ev) {
  ev.preventDefault()
  let temp = this.state.table
  temp.map((row)=>{
    return row.push('')
  })
  this.setState({
    table: temp
  })
}

function addRow (ev) {
  ev.preventDefault()
  let temp = this.state.table
  let col = temp[0].length
  temp.push(Array(col).join('.').split('.'))
  this.setState({
    table: temp
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let temp = this.state.table
  temp[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: temp
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
  let temp=this.state.table;
  if (temp.length > 1){
    temp.pop()
  } else{
    return
  }

  this.setState({
    table: temp
  })
}

function removeColumn (ev) {
  ev.preventDefault()
  let temp = this.state.table
  if (temp[0].length>1){
    temp.map((row)=>{
      row.pop()
    })
  }else{
    return
  }

  this.setState({
    table: temp
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
