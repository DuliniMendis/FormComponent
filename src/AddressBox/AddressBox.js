import React from 'react';
import './AddressBox.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

export default class AddressBox extends React.Component {

  componentDidMount() {

   if (typeof google === 'undefined') {
    console.warn('Google Places was not initialized. LocationSearchBox will not function.');
    return;
  }

  const { country, onPlaceChanged } = this.props;
  const { places } = window.google.maps;

  let options;

  if (country) {
    options = {
      componentRestrictions: { country }
    };
  }

  const input = this.locationSearch;

  input.setAttribute('placeholder', '');

  if (!input._autocomplete) {
    input._autocomplete = new places.Autocomplete(input, options);

    input._autocomplete.addListener('place_changed', () => {
      onPlaceChanged && onPlaceChanged(input._autocomplete.getPlace());
    });
  }

}


render() {

  return (
   <div className="askComponent" style={this.props.wrapperStyle}>

   <MuiThemeProvider>


   <TextField 
   ref={(ref) => {this.locationSearch = (ref)?ref.input:null; }} 
   id={this.props.id.toString()}   
   value={this.props.value}
   disabled={this.props.disabled}
   fullWidth={true}s
   hintText={this.props.placeholder}
   floatingLabelText={this.props.label}
   floatingLabelFixed={true}

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
   onChange={this.props.handleChange} 
   onKeyUp={this.props.handleKeyUp}
   onBlur={this.props.handleOnBlur} />

   
   </MuiThemeProvider>

   <div className="description">{this.props.description}</div>
   </div>


   );


} 
}


