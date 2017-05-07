'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TextBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBox = function (_React$Component) {
    _inherits(TextBox, _React$Component);

    function TextBox() {
        _classCallCheck(this, TextBox);

        return _possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).apply(this, arguments));
    }

    _createClass(TextBox, [{
        key: 'render',
        value: function render() {

            console.log(this.props.styles);

            var color = "";
            if (this.props.errorState === "success") color = "#499e3c";
            if (this.props.errorState === "error") color = "#f44336";

            return _react2.default.createElement(
                'div',
                { className: 'askComponent' },
                _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    null,
                    _react2.default.createElement(_TextField2.default, {
                        id: this.props.id.toString(),
                        type: this.props.type,
                        value: this.props.value,
                        disabled: this.props.disabled,
                        hintText: this.props.placeholder,
                        fullWidth: true,
                        floatingLabelText: this.props.label,
                        floatingLabelFixed: true,
                        onChange: this.props.handleChange,
                        onKeyUp: this.props.handleKeyUp,
                        onBlur: this.props.handleOnBlur,
                        'data-mask': this.props.mask,

                        style: this.props.styles.style,
                        inputStyle: this.props.styles.inputStyle,
                        underlineDisabledStyle: this.props.styles.underlineDisabledStyle,
                        floatingLabelStyle: this.props.styles.floatingLabelStyle,
                        floatingLabelFocusStyle: this.props.styles.floatingLabelFocusStyle,
                        underlineStyle: this.props.styles.underlineStyle,
                        underlineFocusStyle: this.props.styles.underlineFocusStyle,
                        errorStyle: this.props.styles.errorStyle,
                        hintStyle: this.props.styles.hintStyle,

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

    return TextBox;
}(_react2.default.Component);
// floatingLabelFocusStyle={{
//         color: color
//     }}


exports.default = TextBox;