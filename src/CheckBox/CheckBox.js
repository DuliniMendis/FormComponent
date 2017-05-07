import React from 'react';
import './CheckBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

export default class CheckBox extends React.Component {

  handleClick = (evt) => {
    let value = evt.target.value==="on"?true:false;
    this.props.handleChange(value);
  }

  render() {


    return (
     <div className="askComponent" style={this.props.wrapperStyle}>

     <MuiThemeProvider>

     <Checkbox 
     label={this.props.label}
     value={(this.props.value==="true")?"on":"off"}
     fullWidth={true}
     disabled={this.props.disabled}
     id={this.props.id} 

style={this.props.styles.style}
    inputStyle={this.props.styles.inputStyle}
     floatingLabelStyle={this.props.styles.floatingLabelStyle}
     floatingLabelFocusStyle={this.props.styles.floatingLabelFocusStyle}
     errorStyle={this.props.styles.errorStyle}

     errorText={this.props.errorMsgs?this.props.errorMsgs:""} 
     onClick={this.handleClick} />


     </MuiThemeProvider>
     <div className="description">{this.props.description}</div>


     </div>
     );


  }


}

