'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    let { table, onChange, onFocus, onBlur } = this.props
    let rows = table.map((row, i) => {
      return (<Row key={i} row={row} onChange={onChange.bind(null, i)} onFocus={onFocus.bind(null, i)} />)
    })
    return(
      <table className="table" onBlur={onBlur}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
