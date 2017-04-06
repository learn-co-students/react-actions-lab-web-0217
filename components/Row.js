'use strict';

const React = require('react');
const Cell = require('./Cell');

//remember to return the object in map directly
class Row extends React.Component {
  render () {
    return (
      <tr className="row">
        {this.props.row.map((cell, idx) =>
            <Cell key={idx} cell={cell} onFocus={this.props.onFocus.bind(null, idx)} onChange={this.props.onChange.bind(null, idx)}/>
          )
        }
      </tr>
    )
  }
}

module.exports = Row;
