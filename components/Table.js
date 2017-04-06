'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
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

module.exports = Table;
