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
       <div className="askComponent">

      <MuiThemeProvider>

             <Checkbox 
             label={this.props.label}
             value={(this.props.value==="true")?"on":"off"}
             id={this.props.id} 
             onClick={this.handleClick} />
       

      </MuiThemeProvider>
 <div className="description">{this.props.description}</div>
         

       </div>
       );

  
  }

 
}

