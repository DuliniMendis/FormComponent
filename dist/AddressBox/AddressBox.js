'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./AddressBox.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressBox = function (_React$Component) {
    _inherits(AddressBox, _React$Component);

    function AddressBox() {
        _classCallCheck(this, AddressBox);

        return _possibleConstructorReturn(this, (AddressBox.__proto__ || Object.getPrototypeOf(AddressBox)).apply(this, arguments));
    }

    _createClass(AddressBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (typeof google === 'undefined') {
                console.warn('Google Places was not initialized. LocationSearchBox will not function.');
                return;
            }

            var _props = this.props,
                country = _props.country,
                onPlaceChanged = _props.onPlaceChanged;
            var places = window.google.maps.places;


            var options = void 0;

            if (country) {
                options = {
                    componentRestrictions: { country: country }
                };
            }

            var input = this.locationSearch;

            input.setAttribute('placeholder', '');

            if (!input._autocomplete) {
                input._autocomplete = new places.Autocomplete(input, options);

                input._autocomplete.addListener('place_changed', function () {
                    onPlaceChanged && onPlaceChanged(input._autocomplete.getPlace());
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'askComponent' },
                _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    null,
                    _react2.default.createElement(_TextField2.default, {
                        ref: function ref(_ref) {
                            _this2.locationSearch = _ref ? _ref.input : null;
                        },
                        id: this.props.id.toString(),
                        value: this.props.value,
                        hintText: this.props.placeholder,
                        floatingLabelText: this.props.label,
                        floatingLabelFixed: true,
                        onChange: this.props.handleChange,
                        onKeyUp: this.props.handleKeyUp,
                        onBlur: this.props.handleOnBlur })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    this.props.description
                )
            );
        }
    }]);

    return AddressBox;
}(_react2.default.Component);

exports.default = AddressBox;