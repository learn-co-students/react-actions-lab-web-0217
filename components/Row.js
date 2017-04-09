'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const {row, onChange, onFocus} = this.props
    return(
      <tr className="row">
        {this.props.row.map((item, colindex)=>{
          return <Cell
            key={colindex}
            cell={item}
            onChange={onChange.bind(null,colindex)}
            onFocus={onFocus.bind(null,colindex)} />
        })}
      </tr>
    )
  }
}

module.exports = Row;
