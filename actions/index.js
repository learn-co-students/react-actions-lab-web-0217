'use strict'



function addColumn (event) {
	event.preventDefault()
	
	let newTable = this.state.table.map((row) => [...row, ''])

	this.setState({
		table: newTable
	})
}

function addRow (event) {
	event.preventDefault()

	let numOfColumns = this.state.table[0].length

	this.setState({
		table: [...this.state.table, Array(numOfColumns).fill('')]
	})
}

function changeCell (rowIndex, columnIndex, event) {
	let newTable = this.state.table
	newTable[rowIndex][columnIndex] = event.target.value

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

function removeRow (event) {
	event.preventDefault()
	
	if (this.state.table.length <= 1) return
	let newTable = this.state.table
	newTable.pop()

	this.setState({
		table: newTable
	})
}

function removeColumn (event) {
	event.preventDefault()
	if (this.state.table[0].length <= 1) return
	let newTable = this.state.table.map((row) => 
		row.slice(0, -1)
		// -1 refers to the number of items to be deleted starting from the last item in array
	)

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
}
