'use strict';

const React = require('react');
const actions = require('../actions');
const Table = require('./Table');

class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null,
      table: [['']]
    };
    this.handleAddColumn = actions.addColumn.bind(this)
    this.handleAddRow = actions.addRow.bind(this)
    this.handleRemoveColumn = actions.removeColumn.bind(this)
    this.handleRemoveRow = actions.removeRow.bind(this)
    this.handleChange = actions.changeCell.bind(this)
    this.handleFocus = actions.focusCell.bind(this)
    this.handleBlur = actions.blurCell.bind(this)
  }


  render () {
    let { focused, table } = this.state
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn}>Add Column</button>
          {' '}
          <button onClick={this.handleAddRow}>Add Row</button>
          {' '}
          <button onClick={this.handleRemoveColumn}>Remove Column</button>
          {' '}
          <button onClick={this.handleRemoveRow}>Remove Row</button>
        </div>

        <Table table={table} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />

        <div className='spreadsheet__focused'>
          {focused ? `${focused[0]} - ${focused[1]}` : ''}
        </div>
      </div>
    );
  }
}

module.exports = Spreadsheet;
