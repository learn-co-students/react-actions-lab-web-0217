'use strict';

const React = require('react');
const Cell = require('./Cell');



class Row extends React.Component {

	// constructor(){
	// 	super()
	// 	this.onChange = this.onChange.bind(this)
	// }

  render () {

  	return (
	  	<tr className="row">
		  	{this.props.row.map((cell, index) => <Cell cell={cell} key={index} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)} />)}
	  	</tr>
  	)
  }
}

module.exports = Row;
