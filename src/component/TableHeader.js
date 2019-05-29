import React, { Component } from 'react';



class TableRowHeaderMap extends Component {
	
	constructor(props) {
		
	 	super(props);
		 this.TableHeader = this.TableHeader.bind(this);
		 this.OrderTheTable = this.OrderTheTable.bind(this);
	}

	OrderTheTable(number){
		

		return alert(number.toString());
	}

	Button(){
		
		return
	}
	
	TableHeader(){
		var head_names = ['ID','Address','Price','Last Update','Type','Is in favorite'];		
		const HEAD_NAMES = head_names.map((number) =>		 
		<th key={number.toString()}><button onClick={()=>this.OrderTheTable(number)} type="button"> {number}</button></th>    
		);

		return HEAD_NAMES;
	}

	

	render() {
		

		return (

			<thead>
				<tr>

				 <this.TableHeader/>

				</tr>
			</thead>

		);
	}

 }

export default TableRowHeaderMap;