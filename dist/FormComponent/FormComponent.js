'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./FormComponent.css');

var _IntegerInputBox = require('../IntegerInputBox');

var _IntegerInputBox2 = _interopRequireDefault(_IntegerInputBox);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _TextBox = require('../TextBox');

var _TextBox2 = _interopRequireDefault(_TextBox);

var _AddressBox = require('../AddressBox');

var _AddressBox2 = _interopRequireDefault(_AddressBox);

var _SelectBox = require('../SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _DateInputBox = require('../DateInputBox');

var _DateInputBox2 = _interopRequireDefault(_DateInputBox);

var _TimeInputBox = require('../TimeInputBox');

var _TimeInputBox2 = _interopRequireDefault(_TimeInputBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import axios from 'axios';
//import Websocket from 'react-websocket';

var variableStr = 'id,value,type,label,value,mask,placeholder,regex{id,regexStr,errorMsg},description,errorMsgs,min,max,options';

var InputBox = function (_React$Component) {
  _inherits(InputBox, _React$Component);

  function InputBox(props) {
    _classCallCheck(this, InputBox);

    var _this = _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call(this, props));

    _this.updateState = function (data) {
      console.log(data);

      var errorMsgs = _this.state.errorMsgs;

      if (data.component.errorMsgs) errorMsgs.add(data.component.errorMsgs);

      _this.setState({
        styles: data.component.styles,
        type: data.component.type,
        value: data.component.value,
        label: data.component.label,
        disabled: data.component.disabled,
        mask: data.component.mask,
        placeholder: data.component.placeholder,
        regex: data.component.regex,
        description: data.component.description,
        errorMsgs: errorMsgs,
        min: data.component.min,
        max: data.component.max,
        options: data.component.options
      });

      if (_this.state.errorMsgs.size > 0) _this.setState({ error: true });
    };

    _this.handleChange = function (evt, formattedValue) {

      _this.applyMask(evt.target.value, evt.target.dataset.mask);
    };

    _this.handleKeyUp = function (evt) {
      if (evt.keyCode === 13) {
        _this.submit();
      } else {
        _this.validate(_this.state.value, _this.state.regex);
      }
    };

    _this.handleOnBlur = function (evt) {

      _this.setState({ errorState: "error" });
    };

    _this.handleCheckboxChange = function (evt) {
      _this.setState({ value: _this.state.value === "false" ? "true" : "false" }, function () {
        _this.submit();
      });
    };

    _this.submit = function () {

      if (_this.validate(_this.state.value, _this.state.regex)) {

        _this.setState({ error: false });
        //this.changeComponent(this.props.id,this.state.value);
        _this.props.changeComponent(_this.props.id, _this.state.value);
      } else {
        _this.setState({
          error: true
        });
      }
    };

    _this.changeValue = function (value) {
      _this.setState({
        value: value
      }, function () {
        _this.submit();
      });
    };

    _this.validate = function (value, patterns) {

      var result = true;
      var errorMsgs = _this.state.errorMsgs;

      if (!(_this.state.min === 0 && value.length === 0)) {

        if (value.length < _this.state.min) {
          errorMsgs.add("Required field");
          result = false;
        } else {
          if (_this.state.errorMsgs.size > 0) {
            errorMsgs.delete("Required field");
          }
          for (var i = 0; i < patterns.length; i++) {
            var re = patterns[i].regexStr; //new RegExp()
            if (!re.test(value)) {
              errorMsgs.add(patterns[i].errorMsg);
              result = false;
            } else {
              errorMsgs.delete(patterns[i].errorMsg);
            }
          }

          if (value.length > _this.state.max) {
            result = false;
            errorMsgs.add("Input exceeds maximum length");
          }
        }
      } else {
        for (var _i = 0; _i < patterns.length; _i++) {
          errorMsgs.delete(patterns[_i].errorMsg);
        }
      }

      _this.setState({ errorMsgs: _this.state.errorMsgs });

      if (result === false) {
        _this.setState({
          errorState: "error"
        });
      } else {
        _this.setState({
          errorState: "success"
        });
      }

      return result;
    };

    _this.applyMask = function (data, mask) {

      var targetVal = '';

      if (mask) {
        var dataArr = data.split('');
        var maskArr = mask.split('');

        for (var i = 0; i < maskArr.length; i++) {

          if (dataArr.length <= i) break;
          if (maskArr[i] !== 'x' && maskArr[i] !== '0' && maskArr[i] !== dataArr[i]) {
            dataArr.splice(i, 0, maskArr[i]);
          }
          if (maskArr[i] === '0' && isNaN(dataArr[i])) {
            dataArr.splice(i, 1);
          }
        }
        if (dataArr.length > maskArr.length) dataArr = dataArr.splice(0, maskArr.length);

        // if(maskArr[dataArr.length] !== 'x' && maskArr[dataArr.length] !== '0')
        //   dataArr.push(maskArr[dataArr.length]);

        targetVal = dataArr.join('');
      } else {
        targetVal = data;
      }

      _this.setState({ value: targetVal });
    };

    _this.handleAddressSelect = function (place) {
      _this.setState({ value: place, errorState: "success" });
      _this.submit();
    };

    _this.state = {
      error: false,
      errorState: null,
      id: props.id,
      styles: props.styles ? props.styles : {},
      type: props.type ? props.type : "text",
      label: props.label ? props.label : "",
      value: props.value ? props.value : "",
      disabled: props.disabled ? props.disabled : false,
      mask: props.mask ? props.mask : "",
      placeholder: props.placeholder ? props.placeholder : "",
      regex: props.regex ? props.regex : "",
      description: props.description ? props.description : "",
      errorMsgs: new Set(),
      min: props.min ? props.min : "",
      max: props.max ? props.max : "",
      options: props.options ? props.options : ""
    };

    return _this;
  }

  _createClass(InputBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {

      // if(newProps.data.component.id==this.state.id){

      //   this.updateState(newProps.data);

      // }
      var data = { component: newProps };
      this.updateState(data);
    }

    // componentWillMount () {
    //    this.getComponent(this.props.id);
    // }

    // getComponent = (id) => {
    //   axios({
    //       url: '?query={component(id:'+id+'){'+variableStr+'}}',
    //       method: 'get',
    //       baseURL: 'http://localhost:4000/graphql',
    //     }).then( (response) => {
    //       this.updateState(response.data.data);
    //     }).catch( error => {
    //       console.log( error );        
    //     });

    // }

    // changeComponent = (id,value) => {
    //   let variables = {
    //     id:id,
    //     value:value
    //   };

    //   let query = 'mutation ($id:ID!,$value:String) { changeComponent(id:$id,value:$value) { '+variableStr+' } }';

    //   axios({
    //       url: '',
    //       method: 'post',
    //       baseURL: 'http://localhost:4000/graphql',
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       data: JSON.stringify({query, variables})
    //     }).then( (response) => {
    //       let data = {component: response.data.data.changeComponent};
    //       this.updateState(data);
    //     }).catch( error => {
    //       console.log( error );
    //     });
    // }

    //textbox value changes


    //handles when enter is pressed --> send a mutation to the server


    //textbox value changes


    // Replace `x` characters with characters from `data`

  }, {
    key: 'render',
    value: function render() {

      var errorString = "";
      if (this.state.error === true) {
        this.state.errorMsgs.forEach(function (item) {
          errorString = errorString + item + ". ";
        });
      }

      switch (this.props.type) {
        case "integer":
          return _react2.default.createElement(_IntegerInputBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.handleChange,
            handleKeyUp: this.handleKeyUp,
            handleOnBlur: this.handleOnBlur,
            mask: this.state.mask,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "boolean":
          return _react2.default.createElement(_CheckBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.handleCheckboxChange,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "address":
          return _react2.default.createElement(_AddressBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.handleChange,
            handleKeyUp: this.handleKeyUp,
            handleOnBlur: this.handleOnBlur,
            handleAddressSelect: this.handleAddressSelect,
            mask: this.state.mask,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "select":
          return _react2.default.createElement(_SelectBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.changeValue,
            placeholder: this.state.placeholder,
            options: this.state.options,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "textarea":
          return _react2.default.createElement(_TextArea2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.handleChange,
            handleOnBlur: this.handleOnBlur,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "date":
          return _react2.default.createElement(_DateInputBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.changeValue,
            mask: this.state.mask,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        case "time":
          return _react2.default.createElement(_TimeInputBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.changeValue,
            mask: this.state.mask,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
        default:
          return _react2.default.createElement(_TextBox2.default, {
            styles: this.state.styles,
            label: this.state.label,
            description: this.state.description,
            type: this.state.type,
            value: this.state.value,
            disabled: this.state.disabled,
            id: this.props.id,
            handleChange: this.handleChange,
            handleKeyUp: this.handleKeyUp,
            handleOnBlur: this.handleOnBlur,
            mask: this.state.mask,
            placeholder: this.state.placeholder,
            errorState: this.state.errorState,
            errorMsgs: errorString });
      }
    }
  }]);

  return InputBox;
}(_react2.default.Component);

exports.default = InputBox;