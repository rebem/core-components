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

var _inputRawStyles = require('#input?raw&-styles');

var _inputRawStyles2 = _interopRequireDefault(_inputRawStyles);

exports['default'] = function (Base) {
    return (function (_InputClass) {
        _inherits(_class, _InputClass);

        _createClass(_class, null, [{
            key: 'displayName',
            get: function get() {
                return 'core: button';
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

            this.state = _extends({}, this.state, {
                pressed: false
            });
        }

        _createClass(_class, [{
            key: '_onInputMouseDown',
            value: function _onInputMouseDown(e) {
                this.setState({
                    pressed: true
                });

                if (this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }
            }
        }, {
            key: '_onInputMouseUp',
            value: function _onInputMouseUp(e) {
                this.setState({
                    pressed: false
                });

                if (this.props.onMouseUp) {
                    this.props.onMouseUp(e);
                }
            }
        }, {
            key: '_onInputMouseLeave',
            value: function _onInputMouseLeave(e) {
                _get(Object.getPrototypeOf(_class.prototype), '_onInputMouseLeave', this).call(this, e);

                this.setState({
                    pressed: false
                });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(e);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var template = _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

                template.block = 'button';
                template.tag = 'span';

                template.mods = _extends({}, template.mods, {
                    pressed: this.state.pressed
                });

                template.content[0].props = _extends({}, template.content[0].props, {
                    type: 'button',
                    onMouseDown: this._onInputMouseDown.bind(this),
                    onMouseUp: this._onInputMouseUp.bind(this),
                    onMouseLeave: this._onInputMouseLeave.bind(this)
                });

                return template;
            }
        }]);

        return _class;
    })((0, _inputRawStyles2['default'])(Base));
};

module.exports = exports['default'];