'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
      <tr className='row'>
        {this.props.row.map((el, index) =>
          <Cell
            onChange={this.props.onChange.bind(null, index)}
            onFocus={this.props.onFocus.bind(null, index)}
            cell={el}
            key={index}
          />
        )}
      </tr>
    )
  }
}
