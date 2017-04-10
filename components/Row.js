'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
      <tr className="row">
        {this.props.row.map((cell, cellIndex) => {
          return <Cell
          key={cellIndex}
          cell={cell}
          onChange={this.props.onChange.bind(null, cellIndex)}
          onFocus={this.props.onFocus.bind(null, cellIndex)}
          />
        })}
      </tr>
    )
  }
}
