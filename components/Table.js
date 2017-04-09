'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const {table, onChange, onFocus, onBlur} = this.props

    return(
      <table className="table" onBlur={onBlur}>
        <tbody>
        {table.map((row, rowindex)=>{
          return (<Row
                    key={rowindex}
                    row={row}
                    onFocus={onFocus.bind(null,rowindex)}
                    onChange={onChange.bind(null,rowindex)}
                  />)
        })}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
