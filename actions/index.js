'use strict';

function addColumn (ev) {
  ev.preventDefault()
  this.setState({
    table:
      this.state.table.map((row)=>
      [...row, '']
      )
    })
  }

  function addRow (ev) {
    ev.preventDefault()

    this.setState({
      table: [
              ...this.state.table,
              this.state.table[0].map(() => '')
              ]
    })
  }

function changeCell (rowIndex, columnIndex, ev) {
  let updateRow = [...this.state.table[rowIndex]]
  updateRow.splice(columnIndex, 1, ev.target.value) //are we really changing the state?  or are we just creating a new array?
  // is 'setState' just a function we get in the React.API.  Meaning we can set state in other ways if we want.

  let updateTable = [...this.state.table.slice()] //return the entire state table
  updateTable.splice(rowIndex, 1, updateRow) //this replaces the entire row at the rowIndex

  this.setState({
    table: updateTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex] //how does this funciton know which arguments are row vs col?  Is it the order it's passed in?
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length>1){
      const updatedTable = this.state.table
        .slice(0, -1);

      this.setState({
       table: updatedTable
      })
    }
}

function removeColumn (ev) {
  ev.preventDefault()
  if (this.state.table[0].length>1){
    this.setState({
      table: this.state.table.map((row)=>
        row.slice(0,-1)
      )
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
