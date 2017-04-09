'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    return (
      <tr className="row">
        {
          this.props.row.map((cell, index) => <Cell cell={cell} key={index} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)} />
          )
        }
      </tr>
    )
  }
}

module.exports = Row;
