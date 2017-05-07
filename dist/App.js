'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormComponent = require('./FormComponent');

var _FormComponent2 = _interopRequireDefault(_FormComponent);

require('./App.css');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactTapEventPlugin2.default)();

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.handleChange = function (id, value) {
      var data = _this.state.data.slice();
      var itemIndex = data.findIndex(function (item) {
        return item.id === id;
      });
      var item = data[itemIndex];
      item.value = value;
      _this.setState({ data: data });
    };

    _this.state = {
      data: [{
        id: 0,
        type: 'text',
        label: 'Name',
        value: 'test',
        description: 'Full Name',
        min: 1,
        max: 100,
        disabled: true
      }, {
        id: 1,
        type: 'integer',
        label: 'Age',
        mask: 'xxx',
        placeholder: '0',
        min: 1
      }, {
        id: 2,
        type: 'text',
        label: 'Email',
        placeholder: 'xxxx@xxx.xxx',
        regex: [{
          regexStr: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMsg: 'Please input a valid email'
        }],
        description: 'Primary Email',
        min: 1,
        max: 200
      }, {
        id: 3,
        type: 'number',
        label: 'Price',
        placeholder: '00.00',
        regex: [{
          regexStr: /^\d+(\.\d{1,2})?$/,
          errorMsg: 'Please check the input value'
        }],
        description: 'Currency',
        min: 1
      }, {
        id: 4,
        type: 'boolean',
        label: 'Agreed',
        value: 'false',
        description: 'Do you agree to the terms and conditions?'
      }, {
        id: 5,
        type: 'address',
        label: 'Address',
        max: 200
      }, {
        id: 6,
        type: 'select',
        label: 'Color',
        placeholder: 'Select a color',
        options: ['Blue', 'Red', 'Yellow', 'Green']
      }, {
        id: 7,
        type: 'textarea',
        label: 'Description',
        min: 0,
        max: 1000
      }, {
        id: 8,
        type: 'date',
        label: 'Date',
        mask: 'dd-mm-yyyy',
        placeholder: 'Select a date'
      }, {
        id: 9,
        type: 'time',
        label: 'Time',
        mask: '00:00',
        placeholder: 'Select a time'
      }, {
        id: 10,
        type: 'text',
        label: 'Phone',
        value: '',
        mask: '00-000-000000',
        placeholder: 'xx-xxx-xxxxxx',
        regex: [],
        description: 'Mobile Phone Number',
        min: 1
      }, {
        id: 11,
        type: 'number',
        label: 'Weight',
        value: '',
        placeholder: '0.0',
        min: 1,
        max: 3
      }, {
        id: 12,
        type: 'text',
        label: 'Website',
        value: '',
        mask: '',
        placeholder: 'www.google.com',
        regex: [{
          regexStr: /[-a-zA-Z0-9@:%_\+.~#?&=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&=]*)?/,
          errorMsg: 'Please input a valid URL'
        }],
        description: '',
        errorMsgs: '',
        min: 0,
        max: 1000,
        options: []
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _styles,
          _this2 = this;

      var styles = (_styles = {
        wrapperStyle: {
          margin: '0px'
        },
        style: {
          fontSize: '14px'
        },
        inputStyle: {},
        errorStyle: {},
        underlineStyle: {},
        underlineFocusStyle: {}
      }, _defineProperty(_styles, 'underlineFocusStyle', {}), _defineProperty(_styles, 'underlineDisabledStyle', {}), _defineProperty(_styles, 'floatingLabelStyle', {
        fontSize: '12px'
      }), _defineProperty(_styles, 'floatingLabelFocusStyle', {}), _styles);

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          this.state.data.map(function (item) {
            return _react2.default.createElement(_FormComponent2.default, {
              key: item.id,
              id: item.id,
              styles: styles,
              type: item.type,
              value: item.value,
              label: item.label,
              disabled: item.disabled,
              mask: item.mask,
              placeholder: item.placeholder,
              regex: item.regex,
              description: item.description,
              errorMsgs: item.errorMsgs,
              min: item.min,
              max: item.max,
              options: item.options,
              changeComponent: _this2.handleChange });
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;