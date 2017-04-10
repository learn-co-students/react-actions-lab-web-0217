'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const { row } = this.props
    const cells = row.map((cell, i) => {
      return <Cell key={i} cell={row[i]} onChange={this.props.onChange.bind(null,i)} onFocus={this.props.onFocus.bind(null,i)} />
    })
    return(
      <tr className="row">{cells}</tr>
    )
  }
}
