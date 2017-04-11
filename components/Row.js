'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const {row, onChange, onFocus} = this.props
    return(
      <tr className="row">
        {row.map((cell, index) => {
          return <Cell cell={cell}
            onChange={this.props.onChange.bind(null, index)}
            onFocus={this.props.onFocus.bind(null, index)}
            key={index}/>
        })}
      </tr>
    )
  }
}
