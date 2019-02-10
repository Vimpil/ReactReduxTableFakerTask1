import React, { Component } from 'react';

const head_names = ['ID','Address','Price','Last Update','Type','Is in favorite'];

export const HEAD_NAMES = head_names.map((number) =>
  <th key={number.toString()}><button type="button" onClick={onItemClick}> {number}</button> </th>    
);

function onItemClick(){
	alert("hey!");
}

class TableRowHeaderMap extends Component {
	constructor(props) {

	 	super(props);

	  	this.state = {
	      head_names: HEAD_NAMES
	    };

	}
 }

export default TableRowHeaderMap;