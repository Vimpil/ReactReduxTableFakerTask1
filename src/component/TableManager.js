 import React, { Component } from 'react';
 import TableHeader from './TableHeader';
 import TableBody from './TableBody';


 class TableManager extends Component {
  
  render(){
    return(
      <table  id="data_table">
          <TableHeader />
          <TableBody />
      </table>
      );
  }

}

export default TableManager;
