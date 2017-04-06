'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {this.props.table.map((row, idx) =>
            <Row key={idx} row={row} onFocus={this.props.onFocus.bind(null, idx)} onChange={this.props.onChange.bind(null, idx)}/>
          )}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
