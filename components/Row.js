'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
    <tr className="row">
    {
      this.props.row.map((cell, columnIndex)=>
        <Cell
          cell = {cell}
          key = {columnIndex}
          onChange = {this.props.onChange.bind(null, columnIndex)}
          onFocus = {this.props.onFocus.bind(null, columnIndex)}

        />
      )
    }
    </tr>
    )
  }
}
