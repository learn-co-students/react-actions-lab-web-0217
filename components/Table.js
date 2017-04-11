'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          {this.props.table.map((element, index) =>
            <Row
              key={index}
              row={element}
              onChange={this.props.onChange.bind(null, index)}
              onFocus={this.props.onFocus.bind(null, index)}
            />
          )}
        </tbody>
      </table>
    )
  }
}
