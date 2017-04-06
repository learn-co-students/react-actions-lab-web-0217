'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    let cells = []
    for(var i = 0; i < this.props.row.length; i++){
      cells.push(<Cell key={i} cell={this.props.row[i]} onChange={this.props.onChange.bind(null, i)} onFocus={this.props.onFocus.bind(null, i)} />)
    }
    return (
      <tr className="row">
        {cells}
      </tr>
    )
  }
}

module.exports = Row;
