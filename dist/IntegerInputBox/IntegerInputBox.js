'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./IntegerInputBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegerInputBox = function (_React$Component) {
  _inherits(IntegerInputBox, _React$Component);

  function IntegerInputBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IntegerInputBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IntegerInputBox.__proto__ || Object.getPrototypeOf(IntegerInputBox)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyPress = function (evt) {
      var key = evt.charCode ? evt.charCode : evt.keyCode;

      if (key === 46) {
        evt.preventDefault();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IntegerInputBox, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'askComponent' },
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(_TextField2.default, {
            id: this.props.id.toString(),
            type: 'number',
            value: this.props.value,
            hintText: this.props.placeholder,
            floatingLabelText: this.props.label,
            floatingLabelFixed: true,
            onChange: this.props.handleChange,
            onKeyUp: this.props.handleKeyUp,
            onKeyPress: this.handleKeyPress,
            onBlur: this.props.handleOnBlur,
            'data-mask': this.props.mask,

            errorText: this.props.errorMsgs ? this.props.errorMsgs : "" })
        ),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          this.props.description
        )
      );
    }
  }]);

  return IntegerInputBox;
}(_react2.default.Component);

exports.default = IntegerInputBox;