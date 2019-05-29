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
        tabledata:null,
        isFilled: true,
        
       };

    }

    ConsoleLOGS(){

      console.log('isFilled');
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
  
    var joined = this.state.tabledata;
    var forjoined = '';
    var count = 0;
    var key_count=0;
    var rowcount = 0;
    this.get_data= properties$.subscribe((data)=> {
    var row_temp=[];
          console.log('CreateTable');
      // var data=[
      //   {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
      //   {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
      //   {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
      // ];
      // console.log('data');
      // console.log(data);
      // console.log('data');

      // var data=[{id: 1},];

      // 4
      // data=data[0]+{id2: 2};
      // data[0].push([{id: 2},]);
      // data.push({id: 2});
      // console.log('data');
      // console.log(typeof(data[0]));
      // console.log('data.id');
      // console.log(data[0].id);
      // console.log('2++');
      // data[0]['type']=2;
      // console.log('data.id');
      // console.log(data[0].id);
      // console.log();
      // console.log(data);
      // console.log(data[1].title);
      // console.log('data');

        for (var key in data) {
          
            // if(rowcount==0){
              
            //   row_temp.push({key:data[key]});
            //   rowcount++;

            // }else if(rowcount==4){
              
              // row_temp[row_temp.length-1][key.toString]=data[key];
            //   row_temp[key_count][key]=data[key];
            //   row_temp[key_count]['love']=0;
            //   console.log('data[key]');
            //   console.log(data[key]);
            //   console.log('data[key]');
            //   console.log('[key]');
            //   console.log(key);
            //   console.log('[key]');
            //   key_count++;
            //   rowcount=0;
            //   row_temp.push({1:data[key]});
            //   console.log(data[key]);

            // }else{

              // row_temp.push({key:data[key]});
              
              
              
              // if (rowcount===5){
                // row_temp[key_count]['love']=0;
              //   row_temp.push({});
              //   key_count++;  
              //   rowcount=0;
              //   console.log('key_count');
              //   console.log(key_count);
              //   console.log('key_count');
              // }else{
                // row_temp.push(data);
                // key_count++;
              //   rowcount++;
              // console.log('rowcount');
              // }
              
            // }
            // row.push('<td>'+data[key].toString()+'</td>');
          console.log('row_temp');
          console.log(row_temp);
          console.log('row_temp');
          }
          console.log('row_temp.push(data)');
          row_temp.push(data);
          key_count++;
          console.log('row_temp.push(data)');
          // row.push('<td class = fav>love</td>');
          
          // var strrow = row.join('');
          
          // document.querySelector("#data_table tbody:last-child").insertAdjacentHTML('afterbegin',strrow);

          

          // console.log('forjoined[key]');
          // console.log(forjoined);
          // console.log('forjoined[key]');

          
          console.log("small period done");
          console.log(this.get_data);
          console.log(this.state.isFilled);
          console.log(count);
          console.log("small period done");
          count++;

          if(count===400){

            this.setState({isFilled: false});
            console.log('isFilled');
            console.log(this.state.isFilled);
            console.log('if(count===400) statement');
            console.log('row_temp2');
            console.log(row_temp);
            console.log('row_temp2');
            for (var key in row_temp) {
              forjoined=1;
              console.log('forjoined2');
            console.log(forjoined);
            console.log('forjoined2');  
              forjoined+=('<tr><td>'+data[key]['id'].toString()+'</td>'+'<td>'+data[key]['address'].toString()+'</td>'+'<td>'+data[key]['price'].toString()+'</td>'+'<td>'+data[key]['lastUpdate'].toString()+'</td>'+'<td>'+data[key]['type'].toString()+'</td>'+'<td>'+data[key]['love'].toString()+'</td>/<tr>');
              console.log('forjoined1');
            console.log(forjoined);
            console.log('forjoined1');  
            }
            console.log('forjoined');
            console.log(forjoined);
            console.log('forjoined');

            this.get_data=properties$.unsubscribe();
            console.log('Complete!!!!!!!!!!!!!!!!!!!!!!!!!');

          }
          // this.setState({joined:[this.state.tabledata, joined]});
          // it makes unsubcribe not work

      })
      return null;      
      // return forjoined;      
        // return forjoined;      
     }



}

export default TableBody;