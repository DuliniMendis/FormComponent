import React, { Component } from 'react';
import InputBox from './FormComponent';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data:[
      {
        id:0,
        type:'text',
        label: 'Name',
        value: 'test',
        description: 'Full Name',
        min:1,
        max:100
      },
      {
        id:1,
        type:'integer',
        label: 'Age',
        mask: 'xxx',
        placeholder: '0',
        min:1
      },
      {
        id:2,
        type:'text',
        label: 'Email',
        placeholder: 'xxxx@xxx.xxx',
        regex: [{
          regexStr:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMsg:'Please input a valid email'          
        }],
        description: 'Primary Email',
        min:1,
        max:200
      },
      {
        id:3,
        type:'number',
        label: 'Price',
        placeholder: '00.00',
        regex: [{
          regexStr:/^\d+(\.\d{1,2})?$/,
          errorMsg:'Please check the input value'
        }],
        description: 'Currency',
        min:1
      },
      {
        id:4,
        type:'boolean',
        label: 'Agreed',
        value: 'false',
        description: 'Do you agree to the terms and conditions?'
      },
      {
        id:5,
        type:'address',
        label: 'Address',
        max:200
      },
      {
        id:6,
        type:'select',
        label: 'Color',
        placeholder: 'Select a color',
        options:['Blue','Red','Yellow','Green']
      },
      {
        id:7,
        type:'textarea',
        label: 'Description',
        min:0,
        max:1000
      },
      {
        id:8,
        type:'date',
        label: 'Date',
        mask: 'dd-mm-yyyy',
        placeholder: 'Select a date'
      },
      {
        id:9,
        type:'time',
        label: 'Time',
        mask: '00:00',
        placeholder: 'Select a time'
      },
      {
        id:10,
        type:'text',
        label: 'Phone',
        value: '',
        mask: '00-000-000000',
        placeholder: 'xx-xxx-xxxxxx',
        regex: [],
        description: 'Mobile Phone Number',
        min:1
      },
      {
        id:11,
        type:'number',
        label: 'Weight',
        value: '',
        placeholder: '0.0',
        min:1,
        max:3
      },
      {
        id:12,
        type:'text',
        label: 'Website',
        value: '',
        mask: '',
        placeholder: 'www.google.com',
        regex: [{
                regexStr:/[-a-zA-Z0-9@:%_\+.~#?&=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&=]*)?/,
                errorMsg:'Please input a valid URL'
              }],
        description: '',
        errorMsgs:'',
        min:0,
        max:1000,
        options:[]
      },
      ]
    }
  }


handleChange = (id,value) => {
  let data = this.state.data.slice();
  let itemIndex = data.findIndex((item)=>{return item.id===id;});
  let item = data[itemIndex];
  item.value=value;
  this.setState({data:data});
}


  render() {
    return (
      <div className="App">

      {this.state.data.map((item)=>{
        return (
          <InputBox 
          key={item.id}
          id={item.id}
          type={item.type} 
          value={item.value} 
          label={item.label} 
          mask={item.mask} 
          placeholder={item.placeholder}             
          regex={item.regex}      
          description={item.description}
          errorMsgs={item.errorMsgs}
          min={item.min}
          max={item.max}
          options={item.options}
          changeComponent={this.handleChange}/>
          );
      })}
      


      </div>
      );
  }
}

