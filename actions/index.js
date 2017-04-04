'use strict';

function addColumn (ev) {
	ev.preventDefault();
	const tempTable = this.state.table.map((row) => {
		return [...row, []]
	});

	this.setState({
		table: tempTable
	});
}

function addRow (ev) {
	ev.preventDefault();
	const tempRow = this.state.table[0].map(() => {return ''});
	this.setState({
		table: [...this.state.table, ...tempRow]
	});
}

function changeCell (rowIndex, columnIndex, ev) {
	const tempRow = [...this.state.table[rowIndex]];
	tempRow.splice(columnIndex, 1, ev.target.value);

	const tempTable = [...this.state.table.slice()];
	tempTable.splice(rowIndex, 1, tempRow);

	this.setState({
		table: tempTable
	});
}

function focusCell (rowIndex, columnIndex) {
	this.setState({ focused: [rowIndex, columnIndex] })
}

function blurCell () {
	this.setState({ focused: null })
}

function removeRow (ev) {
	ev.preventDefault();
	if (this.state.table.length > 1) {
		const tempTable = this.state.table.slice(0, -1);
		this.setState({ table: tempTable });
	}
}

function removeColumn (ev) {
	ev.preventDefault();
	if (this.state.table[0].length > 1) {
		const tempTable = this.state.table.map(row => { return row.slice(0, -1) });
		this.setState({ table: tempTable });
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
