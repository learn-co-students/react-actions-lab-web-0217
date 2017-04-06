'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
    return (
      <td className="cell">
        <input value={this.props.cell} onFocus={this.props.onFocus} onChange={this.props.onChange}/>
      </td>
    )
  }
}

module.exports = Cell;
