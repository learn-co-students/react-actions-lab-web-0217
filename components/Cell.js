'use strict';

import React from 'react';

export default class Cell extends React.Component {
  render () {
    return(
      <td className='cell'>
        <input onChange={this.props.onChange} onFocus={this.props.onFocus} value={this.props.cell}></input>
      </td>
    )
  }
}
