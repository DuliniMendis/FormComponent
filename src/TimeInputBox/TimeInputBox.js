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

    <div className="askComponent" style={this.props.wrapperStyle}>


    <MuiThemeProvider>

    <TimePicker
    hintText={this.props.placeholder}
    value={this.state.value}
    disabled={this.props.disabled}
    hintText={this.props.placeholder}
    fullWidth={true}
    floatingLabelText={this.props.label}
    floatingLabelFixed={true}
    format="24hr"
    errorText={this.props.errorMsgs}

    style={this.props.styles.style}
    inputStyle={this.props.styles.inputStyle}
    underlineDisabledStyle={this.props.styles.underlineDisabledStyle}
    floatingLabelStyle={this.props.styles.floatingLabelStyle}
    floatingLabelFocusStyle={this.props.styles.floatingLabelFocusStyle}
    underlineStyle={this.props.styles.underlineStyle}
    underlineFocusStyle={this.props.styles.underlineFocusStyle}
    errorStyle={this.props.styles.errorStyle}
    hintStyle={this.props.styles.hintStyle}

    onChange={this.handleChange}     />



    </MuiThemeProvider>
    <div className="description">{this.props.description}</div>

    </div>


    );
 }


}
