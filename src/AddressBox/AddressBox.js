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
     <div className="askComponent">

      <MuiThemeProvider>


    <TextField 
    ref={(ref) => {this.locationSearch = (ref)?ref.input:null; }} 
    id={this.props.id.toString()}   
    value={this.props.value}
    hintText={this.props.placeholder}
    floatingLabelText={this.props.label}
    floatingLabelFixed={true}
    onChange={this.props.handleChange} 
    onKeyUp={this.props.handleKeyUp}
    onBlur={this.props.handleOnBlur} />

   
   </MuiThemeProvider>

 <div className="description">{this.props.description}</div>
     </div>


     );
    
    
  } 
}


