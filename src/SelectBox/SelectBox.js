import React from 'react';
import './SelectBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class SelectBox extends React.Component {


  handleChange = (evt) => {
    let value = evt.target.innerHTML;
    this.props.handleChange(value);
  }

  render() {

    let listOptions = "";

    if(this.props.options)
      listOptions = this.props.options.map((item,i)=>{
        return (<MenuItem primaryText={item} value={item} key={"ov"+i} />);
      })
    


    return (

      <div className="askComponent" style={this.props.wrapperStyle}>

      <MuiThemeProvider>

      <SelectField    
      id={this.props.id.toString()}
      value={this.props.value}
      disabled={this.props.disabled}
      hintText={this.props.placeholder}
      fullWidth={true}
      floatingLabelText={this.props.label}
      floatingLabelFixed={true}
      onChange={this.handleChange} 

      style={this.props.styles.style}
    inputStyle={this.props.styles.inputStyle}
    underlineDisabledStyle={this.props.styles.underlineDisabledStyle}
      floatingLabelStyle={this.props.styles.floatingLabelStyle}
      floatingLabelFocusStyle={this.props.styles.floatingLabelFocusStyle}
      underlineStyle={this.props.styles.underlineStyle}
      underlineFocusStyle={this.props.styles.underlineFocusStyle}
      errorStyle={this.props.styles.errorStyle}
      hintStyle={this.props.styles.hintStyle}

      errorText={this.props.errorMsgs?this.props.errorMsgs:""} >



      {listOptions}
      </SelectField>

      </MuiThemeProvider>
      <div className="description">{this.props.description}</div>
      </div>

      
      );
    
    
  } 
}


