'use strict';

const React = require('react');

class Cell extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <td className='cell'>
        <input type='text'
               value={this.props.cell}
               onChange={this.props.onChange}
               onFocus={this.props.onFocus}
               ></input>
      </td>
    )
  }
}

module.exports = Cell;
