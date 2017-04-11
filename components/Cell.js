'use strict';

import React from 'react';

export default class Cell extends React.Component {
  render () {
    const {onClick, onChange, onFocus, cell} = this.props
    return(
      <td className="cell">
        <input onChange={onChange} onFocus={onFocus} value={cell}></input>
      </td>
    )
  }
}
