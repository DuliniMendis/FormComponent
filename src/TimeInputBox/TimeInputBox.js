import React from 'react';
import './TimeInputBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';


export default class TimeInputBox extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value:props.value?props.value:null
    }
  }

componentWillReceiveProps(newProps){
  this.setState({
    value:newProps.value?newProps.value:null
  })
}

  handleChange = (evt,date) => {


   this.props.handleChange(date);

}


render() {

 return (

  <div className="askComponent">


  <MuiThemeProvider>

  <TimePicker
  hintText={this.props.placeholder}
  value={this.state.value}
  hintText={this.props.placeholder}
  floatingLabelText={this.props.label}
  floatingLabelFixed={true}
  format="24hr"
  errorText={this.props.errorMsgs}
  onChange={this.handleChange}     />



  </MuiThemeProvider>
 <div className="description">{this.props.description}</div>

  </div>


  );
}


}
