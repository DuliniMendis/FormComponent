import React from 'react';
import './IntegerInputBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';


export default class IntegerInputBox extends React.Component {




  handleKeyPress = (evt) => {
    var key = evt.charCode ? evt.charCode : evt.keyCode;

    if (key === 46) {
      evt.preventDefault();
    }
  }



  render() {

    return (

      <div className="askComponent" style={this.props.wrapperStyle}> 

      <MuiThemeProvider>

      <TextField    
      id={this.props.id.toString()}
      type="number"   
      value={this.props.value}
      disabled={this.props.disabled}
      hintText={this.props.placeholder}
      fullWidth={true}
      floatingLabelText={this.props.label}
      floatingLabelFixed={true}
      onChange={this.props.handleChange} 
      onKeyUp={this.props.handleKeyUp}
      onKeyPress={this.handleKeyPress}
      onBlur={this.props.handleOnBlur}
      data-mask={this.props.mask} 

      style={this.props.styles.style}
    inputStyle={this.props.styles.inputStyle}
    underlineDisabledStyle={this.props.styles.underlineDisabledStyle}
      floatingLabelStyle={this.props.styles.floatingLabelStyle}
      floatingLabelFocusStyle={this.props.styles.floatingLabelFocusStyle}
      underlineStyle={this.props.styles.underlineStyle}
      underlineFocusStyle={this.props.styles.underlineFocusStyle}
      errorStyle={this.props.styles.errorStyle}
      hintStyle={this.props.styles.hintStyle}

      errorText={this.props.errorMsgs?this.props.errorMsgs:""}  />


      </MuiThemeProvider>
      <div className="description">{this.props.description}</div>
      </div>


      );


} 
}


