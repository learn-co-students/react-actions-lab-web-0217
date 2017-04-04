'use strict';

const React = require('react');

class Cell extends React.Component {
  constructor() {
    super()
    this.handleKeypress = this.handleKeypress.bind(this)
  }

  handleKeypress(event) {
   if (event.key === "Enter") {
     event.target.blur()
   }
  }

  render () {
    return (
    <td className='cell'>
      <input type="text" value={this.props.cell} onFocus={this.props.onFocus} onChange={this.props.onChange} onKeyPress={this.handleKeypress} />
    </td>
  )}
}

module.exports = Cell;
