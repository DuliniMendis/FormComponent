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

  <div className="askComponent" style={this.props.wrapperStyle}>


  <MuiThemeProvider>


  <DatePicker
  hintText={this.props.placeholder}
  value={this.state.value}
  disabled={this.props.disabled}
  hintText={this.props.placeholder}
  fullWidth={true}
  floatingLabelText={this.props.label}
  floatingLabelFixed={true}
  formatDate={this.formatValue}

style={this.props.styles.style}
    inputStyle={this.props.styles.inputStyle}
    underlineDisabledStyle={this.props.styles.underlineDisabledStyle}
  floatingLabelStyle={this.props.styles.floatingLabelStyle}
  floatingLabelFocusStyle={this.props.styles.floatingLabelFocusStyle}
  underlineStyle={this.props.styles.underlineStyle}
  underlineFocusStyle={this.props.styles.underlineFocusStyle}
  errorStyle={this.props.styles.errorStyle}
  hintStyle={this.props.styles.hintStyle}

  errorText={this.props.errorMsgs?this.props.errorMsgs:""} 
  onChange={this.handleChange}     />



  </MuiThemeProvider>
  <div className="description">{this.props.description}</div>

  </div>


  );
}


}
