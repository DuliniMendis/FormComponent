'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CheckBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  function CheckBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (evt) {
      var value = evt.target.value === "on" ? true : false;
      _this.props.handleChange(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckBox, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'askComponent' },
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(_Checkbox2.default, {
            label: this.props.label,
            value: this.props.value === "true" ? "on" : "off",
            id: this.props.id,
            onClick: this.handleClick })
        ),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          this.props.description
        )
      );
    }
  }]);

  return CheckBox;
}(_react2.default.Component);

exports.default = CheckBox;