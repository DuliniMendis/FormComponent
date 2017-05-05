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

      <div className="askComponent">

      <MuiThemeProvider>

    <TextField    
    id={this.props.id.toString()}
    type="number"   
    value={this.props.value}
    hintText={this.props.placeholder}
    floatingLabelText={this.props.label}
    floatingLabelFixed={true}
    onChange={this.props.handleChange} 
    onKeyUp={this.props.handleKeyUp}
    onKeyPress={this.handleKeyPress}
    onBlur={this.props.handleOnBlur}
    data-mask={this.props.mask} 
    
    errorText={this.props.errorMsgs?this.props.errorMsgs:""}  />


    </MuiThemeProvider>
 <div className="description">{this.props.description}</div>
      </div>


      );
    
    
  } 
}


