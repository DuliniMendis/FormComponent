import React from 'react';
import './TextArea.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';



export default class TextArea extends React.Component {

  render() {

    let color = "";
    if(this.props.errorState==="success")
      color="#499e3c";
    if(this.props.errorState==="error")
      color="#f44336";

   return (

    <div className="askComponent">
    <MuiThemeProvider>

    <TextField    
    id={this.props.id.toString()}
    type={this.props.type}   
    value={this.props.value}
    hintText={this.props.placeholder}
    floatingLabelText={this.props.label}
    floatingLabelFixed={true}
    multiLine={true}
    rows={3}
    rowsMax={100}
    onChange={this.props.handleChange} 
    onKeyUp={this.props.handleKeyUp}
    onBlur={this.props.handleOnBlur}
    data-mask={this.props.mask} 
    
    errorText={this.props.errorMsgs?this.props.errorMsgs:""}  />


    </MuiThemeProvider>


    </div>


    );
 }

 
}
// floatingLabelFocusStyle={{
//         color: color
//     }}