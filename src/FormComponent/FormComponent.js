import React from 'react';
import './FormComponent.css';

//import axios from 'axios';
//import Websocket from 'react-websocket';

 import IntegerInputBox from '../IntegerInputBox';
 import CheckBox from '../CheckBox';
import TextBox from '../TextBox';
 import AddressBox from '../AddressBox';
 import SelectBox from '../SelectBox';
 import TextArea from '../TextArea';
 import DateInputBox from '../DateInputBox';
 import TimeInputBox from '../TimeInputBox';

const variableStr = 'id,value,type,label,value,mask,placeholder,regex{id,regexStr,errorMsg},description,errorMsgs,min,max,options';

export default class InputBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorState:null,
      id: props.id,
      styles:props.styles?props.styles:{},
      type: props.type?props.type:"text",
      label: props.label?props.label:"",
      value: props.value?props.value:"",
      disabled:props.disabled?props.disabled:false,
      mask: props.mask?props.mask:"",
      placeholder: props.placeholder?props.placeholder:"",
      regex: props.regex?props.regex:"",
      description: props.description?props.description:"",
      errorMsgs: new Set(),
      min: props.min?props.min:"",
      max: props.max?props.max:"",
      options: props.options?props.options:""
    };
    
  }

  updateState = (data) => {
    console.log(data)

    let errorMsgs = this.state.errorMsgs;

      if(data.component.errorMsgs)
        errorMsgs.add(data.component.errorMsgs)

      this.setState({
        styles: data.component.styles,
        type: data.component.type,
        value: data.component.value,
        label: data.component.label,
        disabled: data.component.disabled,
        mask: data.component.mask,
        placeholder: data.component.placeholder,
        regex: data.component.regex,
        description: data.component.description,
        errorMsgs: errorMsgs,
        min: data.component.min,
        max: data.component.max,
        options: data.component.options,
      });
    

    if(this.state.errorMsgs.size>0)
      this.setState({error:true});


  }

  componentWillReceiveProps(newProps) {


    // if(newProps.data.component.id==this.state.id){

    //   this.updateState(newProps.data);
      
    // }
    let data = {component:newProps}
    this.updateState(data);

  }



  // componentWillMount () {
  //    this.getComponent(this.props.id);
  // }

  // getComponent = (id) => {
  //   axios({
  //       url: '?query={component(id:'+id+'){'+variableStr+'}}',
  //       method: 'get',
  //       baseURL: 'http://localhost:4000/graphql',
  //     }).then( (response) => {
  //       this.updateState(response.data.data);
  //     }).catch( error => {
  //       console.log( error );        
  //     });

  // }

  // changeComponent = (id,value) => {
  //   let variables = {
  //     id:id,
  //     value:value
  //   };

  //   let query = 'mutation ($id:ID!,$value:String) { changeComponent(id:$id,value:$value) { '+variableStr+' } }';

  //   axios({
  //       url: '',
  //       method: 'post',
  //       baseURL: 'http://localhost:4000/graphql',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       data: JSON.stringify({query, variables})
  //     }).then( (response) => {
  //       let data = {component: response.data.data.changeComponent};
  //       this.updateState(data);
  //     }).catch( error => {
  //       console.log( error );
  //     });
  // }

  //textbox value changes
  handleChange = (evt,formattedValue) => {

    this.applyMask(evt.target.value, evt.target.dataset.mask);    

  }

  //handles when enter is pressed --> send a mutation to the server
  handleKeyUp = (evt) => {   
    if (evt.keyCode === 13) {
      this.submit();
    } 
    else{
      this.validate(this.state.value,this.state.regex);
    }
  }

  handleOnBlur = (evt) => {

      this.setState({errorState:"error"});
  }


//textbox value changes
  handleCheckboxChange = (evt) => {
    this.setState({value:this.state.value==="false"?"true":"false"},()=>{
      this.submit();   
    });    
  }

  submit = () => {


    if(this.validate(this.state.value,this.state.regex)){

      this.setState({error:false});
      //this.changeComponent(this.props.id,this.state.value);
      this.props.changeComponent(this.props.id,this.state.value);
    }
    else{
      this.setState({
        error:true        
      });
    }
  }

  changeValue = (value) => {
    this.setState({
      value: value
    },()=>{ this.submit(); });
    
  }


  validate = (value,patterns) => {

    let result = true;
    let errorMsgs = this.state.errorMsgs;

    if(!(this.state.min===0 && value.length===0)){

      if(value.length<this.state.min){
        errorMsgs.add("Required field");        
        result = false;
      }
      else{
        if(this.state.errorMsgs.size>0){
          errorMsgs.delete("Required field");          
        }
        for(let i=0;i<patterns.length;i++){
          let re = patterns[i].regexStr; //new RegExp()
          if(!re.test(value)){
            errorMsgs.add(patterns[i].errorMsg);            
            result = false;
          }
          else{
            errorMsgs.delete(patterns[i].errorMsg);            
          }
        }

        if(value.length>this.state.max){
          result = false;
          errorMsgs.add("Input exceeds maximum length");          
        }
      }
    }
    else{
      for(let i=0;i<patterns.length;i++){
            errorMsgs.delete(patterns[i].errorMsg);            
      }      
    }

    this.setState({errorMsgs:this.state.errorMsgs});


  if(result===false){
     this.setState({
      errorState:"error"        
    });
  }
  else{
    this.setState({
      errorState:"success"        
    });
  }


  return result;
}



  // Replace `x` characters with characters from `data`
  applyMask = (data,mask) => {

    let targetVal = '';

    if(mask){
      let dataArr = data.split('');
      let maskArr = mask.split('');

      for(let i=0;i<maskArr.length;i++){   

        if(dataArr.length<=i)
          break
        if (maskArr[i] !== 'x' && maskArr[i] !== '0' && maskArr[i] !== dataArr[i]){
          dataArr.splice(i, 0, maskArr[i]);          
        }
        if (maskArr[i] === '0' && isNaN(dataArr[i])){
          dataArr.splice(i, 1);          
        } 

      }       
      if(dataArr.length>maskArr.length)
        dataArr = dataArr.splice(0,maskArr.length);

      // if(maskArr[dataArr.length] !== 'x' && maskArr[dataArr.length] !== '0')
      //   dataArr.push(maskArr[dataArr.length]);

      targetVal = dataArr.join('');
    }
    else{
      targetVal = data;
    }


    this.setState({value:targetVal});

  }

  handleAddressSelect = (place) => {
    this.setState({value:place, errorState:"success"});
    this.submit();
  }




  render() {

     let errorString = "";
     if(this.state.error===true){
      this.state.errorMsgs.forEach((item)=>{
        errorString = errorString+item+". ";
      });
     }
 
    switch(this.props.type) {     
      case "integer":
          return (<IntegerInputBox 
            styles={this.state.styles}
            label={this.state.label}
            description={this.state.description}
            type={this.state.type} 
             value={this.state.value} 
             disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.handleChange} 
             handleKeyUp={this.handleKeyUp}
             handleOnBlur={this.handleOnBlur}
             mask={this.state.mask} 
             placeholder={this.state.placeholder}
             errorState={this.state.errorState}
             errorMsgs={errorString} />); 
        case "boolean":
          return (<CheckBox 
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.handleCheckboxChange}  
             errorState={this.state.errorState}
             errorMsgs={errorString} />);
         case "address":
          return (<AddressBox 
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.handleChange} 
             handleKeyUp={this.handleKeyUp}
             handleOnBlur={this.handleOnBlur}
             handleAddressSelect={this.handleAddressSelect}
             mask={this.state.mask} 
             placeholder={this.state.placeholder}
             errorState={this.state.errorState}
            errorMsgs={errorString}  />);
          case "select":
          return (<SelectBox 
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.changeValue}              
             placeholder={this.state.placeholder}
             options={this.state.options}
             errorState={this.state.errorState}
             errorMsgs={errorString} />);
          case "textarea":
          return (<TextArea
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.handleChange}              
             handleOnBlur={this.handleOnBlur}
             placeholder={this.state.placeholder}
             errorState={this.state.errorState}
             errorMsgs={errorString} />);
          case "date":
          return (<DateInputBox
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value}
              disabled={this.state.disabled} 
             id={this.props.id}
             handleChange={this.changeValue}             
             mask={this.state.mask}
             placeholder={this.state.placeholder}
             errorState={this.state.errorState}
             errorMsgs={errorString} />);
          case "time":
          return (<TimeInputBox
            styles={this.state.styles}
             label={this.state.label}
             description={this.state.description}
             type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.changeValue} 
             mask={this.state.mask}
             placeholder={this.state.placeholder}
             errorState={this.state.errorState}
             errorMsgs={errorString} />);
       default:
          return (<TextBox 
            styles={this.state.styles}
             label={this.state.label}
            description={this.state.description}
            type={this.state.type} 
             value={this.state.value} 
              disabled={this.state.disabled}
             id={this.props.id}
             handleChange={this.handleChange} 
             handleKeyUp={this.handleKeyUp}
             handleOnBlur={this.handleOnBlur}
             mask={this.state.mask} 
             placeholder={this.state.placeholder}
              errorState={this.state.errorState}
             errorMsgs={errorString} />);
    }

      
  }

 
}

