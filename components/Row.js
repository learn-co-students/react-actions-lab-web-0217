'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const cell = this.props.row.map((cell, index) => {
      return (
        <Cell
        key={index}
        onFocus={this.props.onFocus.bind(null, index)}
        onChange={this.props.onChange.bind(null, index)}
        cell={cell}
        />
      )
    })
    return (
      <tr className="row">
        {cell}
      </tr>
    )
  }
}
