'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./DateInputBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInputBox = function (_React$Component) {
  _inherits(DateInputBox, _React$Component);

  function DateInputBox(props) {
    _classCallCheck(this, DateInputBox);

    var _this = _possibleConstructorReturn(this, (DateInputBox.__proto__ || Object.getPrototypeOf(DateInputBox)).call(this, props));

    _this.handleChange = function (evt, date) {

      _this.props.handleChange(date);
    };

    _this.formatValue = function (value) {
      if (value && _this.props.mask) return (0, _dateformat2.default)(value, _this.props.mask);else return value;
    };

    _this.state = {
      value: props.value ? props.value : new Date()
    };
    return _this;
  }

  _createClass(DateInputBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        value: newProps.value ? newProps.value : new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      return _react2.default.createElement(
        'div',
        { className: 'askComponent', style: this.props.wrapperStyle },
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(_DatePicker2.default, (_React$createElement = {
            hintText: this.props.placeholder,
            value: this.state.value,
            disabled: this.props.disabled
          }, _defineProperty(_React$createElement, 'hintText', this.props.placeholder), _defineProperty(_React$createElement, 'fullWidth', true), _defineProperty(_React$createElement, 'floatingLabelText', this.props.label), _defineProperty(_React$createElement, 'floatingLabelFixed', true), _defineProperty(_React$createElement, 'formatDate', this.formatValue), _defineProperty(_React$createElement, 'style', this.props.styles.style), _defineProperty(_React$createElement, 'inputStyle', this.props.styles.inputStyle), _defineProperty(_React$createElement, 'underlineDisabledStyle', this.props.styles.underlineDisabledStyle), _defineProperty(_React$createElement, 'floatingLabelStyle', this.props.styles.floatingLabelStyle), _defineProperty(_React$createElement, 'floatingLabelFocusStyle', this.props.styles.floatingLabelFocusStyle), _defineProperty(_React$createElement, 'underlineStyle', this.props.styles.underlineStyle), _defineProperty(_React$createElement, 'underlineFocusStyle', this.props.styles.underlineFocusStyle), _defineProperty(_React$createElement, 'errorStyle', this.props.styles.errorStyle), _defineProperty(_React$createElement, 'hintStyle', this.props.styles.hintStyle), _defineProperty(_React$createElement, 'errorText', this.props.errorMsgs ? this.props.errorMsgs : ""), _defineProperty(_React$createElement, 'onChange', this.handleChange), _React$createElement))
        ),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          this.props.description
        )
      );
    }
  }]);

  return DateInputBox;
}(_react2.default.Component);

exports.default = DateInputBox;