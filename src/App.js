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
    properties$.subscribe((data) => {
      // console.log('data', data);
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
