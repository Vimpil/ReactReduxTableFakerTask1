import React, { Component } from 'react';
import TableManager from './component/TableManager';
import './App.css';
import properties$ from './mock';



class App extends Component {
  constructor(props) {
    super(props);
    this.name= "table_fill";

  }

  componentDidMount() {
    var i=0;
    properties$.subscribe((data) => {
            
      if(i==0){
        console.log('data', data);
      i=1;
      }
      
      // 

      

    })
  }

  render() {
    return (
      <div className="app">
        <TableManager/>
      </div>
    );
  }
}

export default App;
