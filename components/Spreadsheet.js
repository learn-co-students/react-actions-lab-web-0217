'use strict';

import React from 'react';
import actions from '../actions/index';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor () {
    super();
    this.state = {
      table: [['']],
      focused: null
    };
    this.handleAddColumn = actions.addColumn.bind(this)
    this.handleAddRow = actions.addRow.bind(this)
    this.handleRemoveColumn = actions.removeColumn.bind(this)
    this.handleRemoveRow = actions.removeRow.bind(this)
    this.handleFocus = actions.focusCell.bind(this)
    this.handleChange = actions.changeCell.bind(this)
    this.handleBlur = actions.blurCell.bind(this)
  }
  render () {
    let focusedCell
    if (this.state.focused){
      focusedCell = `${this.state.focused[0]} — ${this.state.focused[1]}`
    }
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

        <Table
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        table={this.state.table}/>

        <div className='spreadsheet__focused'>
          {this.state.focused ? focusedCell : null}
        </div>
      </div>
    );
  }
}
