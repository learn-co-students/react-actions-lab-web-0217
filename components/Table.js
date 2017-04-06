'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    let rows = []
    for(var i = 0; i < this.props.table.length; i++){
      rows.push(<Row key={i} row={this.props.table[i]} onChange={this.props.onChange.bind(null, i)} onFocus={this.props.onFocus.bind(null, i)} />)
    }
    return(
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
