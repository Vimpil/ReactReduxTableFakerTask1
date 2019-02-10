import React, { Component } from 'react';
import TableRowMap, { HEAD_NAMES } from './TableRowHeaderMap';

 class TableHeader extends Component {

    constructor(props) {

      super(props);  
      this.name="name";

      this.state = {

        head_names: HEAD_NAMES,

      };

    }

    render() {
      return (

      	<thead>
          <tr>

           {this.state.head_names}

          </tr>
        </thead>

      );
    }

}
export default TableHeader;