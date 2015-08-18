'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _reactAttrsMap = require('react-attrs-map');

var _reactAttrsMap2 = _interopRequireDefault(_reactAttrsMap);

var _propsFilterRaw = require('#_props-filter?raw');

var _propsFilterRaw2 = _interopRequireDefault(_propsFilterRaw);

var inputOnlyProps = (0, _reactAttrsMap2['default'])('input');

exports['default'] = function (Base) {
    return (function (_Base) {
        _inherits(_class, _Base);

        _createClass(_class, null, [{
            key: 'displayName',
            get: function get() {
                return 'core: input';
            }
        }, {
            key: 'extendWith',
            get: function get() {
                return [_propsFilterRaw2['default']];
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

            this.state = {
                value: props.value || '',
                focused: false,
                hovered: false
            };
        }

        _createClass(_class, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(_ref) {
                var value = _ref.value;

                if (this.props.value !== value) {
                    this.setState({
                        value: value
                    });
                }
            }
        }, {
            key: '_onInputChange',
            value: function _onInputChange(e) {
                this.setState({
                    value: e.target.value
                });

                if (this.props.onChange) {
                    this.props.onChange(e);
                }
            }
        }, {
            key: '_onInputFocus',
            value: function _onInputFocus(e) {
                this.setState({
                    focused: true
                });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            }
        }, {
            key: '_onInputBlur',
            value: function _onInputBlur(e) {
                this.setState({
                    focused: false
                });

                if (this.props.onBlur) {
                    this.props.onBlur(e);
                }
            }
        }, {
            key: '_onInputMouseEnter',
            value: function _onInputMouseEnter(e) {
                this.setState({
                    hovered: true
                });

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            }
        }, {
            key: '_onInputMouseLeave',
            value: function _onInputMouseLeave(e) {
                this.setState({
                    hovered: false
                });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(e);
                }
            }
        }, {
            key: 'val',
            value: function val(newValue) {
                if (typeof newValue !== 'undefined') {
                    this.setState({
                        value: newValue
                    });
                } else {
                    return this.state.value;
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return {
                    block: 'input',
                    tag: 'label',
                    mods: {
                        focused: this.state.focused,
                        hovered: this.state.hovered,
                        disabled: this.props.disabled || false
                    },
                    props: this._propsExclude(inputOnlyProps),
                    content: [{
                        elem: 'control',
                        tag: 'input',
                        props: _extends({
                            type: 'text'
                        }, this._propsFrom(inputOnlyProps), {
                            value: this.state.value,
                            onChange: this._onInputChange.bind(this),
                            onFocus: this._onInputFocus.bind(this),
                            onBlur: this._onInputBlur.bind(this),
                            onMouseLeave: this._onInputMouseLeave.bind(this),
                            onMouseEnter: this._onInputMouseEnter.bind(this),
                            ref: 'control',
                            key: 'control'
                        })
                    }].concat([this.props.children])
                };
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];