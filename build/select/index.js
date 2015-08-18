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

var selectOnlyProps = (0, _reactAttrsMap2['default'])('select');

exports['default'] = function (Base) {
    return (function (_Base) {
        _inherits(_class, _Base);

        _createClass(_class, null, [{
            key: 'displayName',
            get: function get() {
                return 'core: select';
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
                value: props.value || null,
                hovered: false,
                focused: false
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
            key: '_onSelectChange',
            value: function _onSelectChange(e) {
                this.setState({
                    value: e.target.value
                });

                if (this.props.onChange) {
                    this.props.onChange(e);
                }
            }
        }, {
            key: '_onSelectMouseEnter',
            value: function _onSelectMouseEnter(e) {
                this.setState({
                    hovered: true
                });

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            }
        }, {
            key: '_onSelectMouseLeave',
            value: function _onSelectMouseLeave(e) {
                this.setState({
                    hovered: false
                });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(e);
                }
            }
        }, {
            key: '_onSelectFocus',
            value: function _onSelectFocus(e) {
                this.setState({
                    focused: true
                });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            }
        }, {
            key: '_onSelectBlur',
            value: function _onSelectBlur(e) {
                this.setState({
                    focused: false
                });

                if (this.props.onBlur) {
                    this.props.onBlur(e);
                }
            }
        }, {
            key: '_getOptions',
            value: function _getOptions() {
                return this.props._options.map(function (option) {
                    return {
                        elem: 'option',
                        tag: 'option',
                        content: option.text,
                        props: {
                            selected: option.selected,
                            value: option.value,
                            key: 'option' + option.value || option.text
                        }
                    };
                });
            }
        }, {
            key: 'val',
            value: function val() {
                return this.state.value;
            }
        }, {
            key: 'render',
            value: function render() {
                return {
                    block: 'select',
                    tag: 'label',
                    mods: {
                        focused: this.state.focused,
                        hovered: this.state.hovered,
                        disabled: this.props.disabled || false
                    },
                    props: this._propsExclude(selectOnlyProps),
                    content: [{
                        elem: 'control',
                        tag: 'select',
                        ref: 'control',
                        props: _extends({}, this._propsFrom(selectOnlyProps), {
                            value: this.state.value,
                            onChange: this._onSelectChange.bind(this),
                            onFocus: this._onSelectFocus.bind(this),
                            onBlur: this._onSelectBlur.bind(this),
                            onMouseLeave: this._onSelectMouseLeave.bind(this),
                            onMouseEnter: this._onSelectMouseEnter.bind(this),
                            key: 'control'
                        }),
                        content: this._getOptions()
                    }].concat([this.props.children])
                };
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];