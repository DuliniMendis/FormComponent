'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SelectBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBox = function (_React$Component) {
      _inherits(SelectBox, _React$Component);

      function SelectBox() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, SelectBox);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (evt) {
                  var value = evt.target.innerHTML;
                  _this.props.handleChange(value);
            }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(SelectBox, [{
            key: 'render',
            value: function render() {

                  var listOptions = "";

                  if (this.props.options) listOptions = this.props.options.map(function (item, i) {
                        return _react2.default.createElement(_MenuItem2.default, { primaryText: item, value: item, key: "ov" + i });
                  });

                  return _react2.default.createElement(
                        'div',
                        { className: 'askComponent', style: this.props.wrapperStyle },
                        _react2.default.createElement(
                              _MuiThemeProvider2.default,
                              null,
                              _react2.default.createElement(
                                    _SelectField2.default,
                                    {
                                          id: this.props.id.toString(),
                                          value: this.props.value,
                                          disabled: this.props.disabled,
                                          hintText: this.props.placeholder,
                                          fullWidth: true,
                                          floatingLabelText: this.props.label,
                                          floatingLabelFixed: true,
                                          onChange: this.handleChange,

                                          style: this.props.styles.style,
                                          inputStyle: this.props.styles.inputStyle,
                                          underlineDisabledStyle: this.props.styles.underlineDisabledStyle,
                                          floatingLabelStyle: this.props.styles.floatingLabelStyle,
                                          floatingLabelFocusStyle: this.props.styles.floatingLabelFocusStyle,
                                          underlineStyle: this.props.styles.underlineStyle,
                                          underlineFocusStyle: this.props.styles.underlineFocusStyle,
                                          errorStyle: this.props.styles.errorStyle,
                                          hintStyle: this.props.styles.hintStyle,

                                          errorText: this.props.errorMsgs ? this.props.errorMsgs : "" },
                                    listOptions
                              )
                        ),
                        _react2.default.createElement(
                              'div',
                              { className: 'description' },
                              this.props.description
                        )
                  );
            }
      }]);

      return SelectBox;
}(_react2.default.Component);

exports.default = SelectBox;