'use strict';

function addColumn (ev) {
	ev.preventDefault()
	let newTable = this.state.table.map((row) => {
		row.push("")
		return row
	})
		this.setState({
			table: newTable
	})
}

function addRow (ev) {
	ev.preventDefault()
	let newTable = this.state.table
	newTable.push(Array(this.state.table[0].length).fill(''))
	this.setState({
		table: newTable
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
	if (this.state.table.length > 1) {
	let newTable = this.state.table
	newTable.pop()
	this.setState({
		table: newTable

		})
	}
}

function removeColumn (ev) {
	ev.preventDefault()
	if (this.state.table[0].length > 1) {
	let newTable = this.state.table.map((row) => {
		row.pop()
		return row
	})
	this.setState({
		table: newTable
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
