import React from 'react';
import './DateInputBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import dateFormat from 'dateformat';


export default class DateInputBox extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value:props.value?props.value:new Date()
    }
  }

componentWillReceiveProps(newProps){
  this.setState({
    value:newProps.value?newProps.value:new Date()
  })
}

  handleChange = (evt,date) => {


   this.props.handleChange(date);

}

formatValue = (value) =>{
  if(value && this.props.mask)
    return dateFormat(value,this.props.mask);  
  else
    return value;
 }


render() {


 return (

  <div className="askComponent">


  <MuiThemeProvider>


  <DatePicker
  hintText={this.props.placeholder}
  value={this.state.value}
  hintText={this.props.placeholder}
  floatingLabelText={this.props.label}
  floatingLabelFixed={true}
  formatDate={this.formatValue}
  onChange={this.handleChange}     />

 

  </MuiThemeProvider>
<div className="description">{this.props.description}</div>

  </div>


  );
}


}
