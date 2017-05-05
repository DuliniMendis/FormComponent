This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This uses material-ui components so you have to add the following lines at the top of your initial component (ex: App.js)
```
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
```

To use the google address lookup you have to include this in your index.html file. You'll need a google maps api key.
```
<script src="https://maps.googleapis.com/maps/api/js?key=[API KEY]&libraries=places"></script>
```

An example use:
 ```
import React, { Component } from 'react';
import FormComponent from 'FormComponent';
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
      }
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
          <FormComponent
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


 ```
