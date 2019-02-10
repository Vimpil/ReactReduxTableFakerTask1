import React, { Component } from 'react';
import properties$ from './../mock';

// import Update_Table from './Update_Table';

  class TableBody extends Component {

    constructor(props) {

        super(props);
        
        this.CreateTable = this.CreateTable.bind(this);
        this.ConsoleLOGS = this.ConsoleLOGS.bind(this);

        // this.UpdateTable = this.UpdateTable.bind(this);
        this.state = {

        isFilled: true,
        
       };

    }

    ConsoleLOGS(){

      return null;

    }
    
    render(){

      const isFilled = this.state.isFilled;
      let Tbody;

      if (isFilled) {

        Tbody = <this.CreateTable/>;  

      } else {

        Tbody= <this.ConsoleLOGS/>; 
     
      }

      return (
        <tbody>

        {Tbody}

        </tbody>
      );
    }



    CreateTable(){

    var count = 0;
    this.get_data= properties$.subscribe((data)=> {
       var row = '';
       
       

          for (var key in data) {

            row += '<td>'+data[key].toString()+'</td>';

          }

          row += '<td class = fav>love</td>';
          
          document.querySelector("#data_table tbody:last-child").insertAdjacentHTML('afterbegin',row);        
          
          count++;

          if(count===400){

            this.setState({isFilled: false});
            this.get_data=properties$.unsubscribe();

          }

          console.log("CoMPLETE");


      })
        
        return  null;
      
     }

}

export default TableBody;