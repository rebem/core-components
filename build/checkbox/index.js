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
                return 'core: checkbox';
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

            this.state = _extends({}, this.state, {
                checked: props.checked
            });
        }

        _createClass(_class, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(_ref) {
                var checked = _ref.checked;

                if (this.props.checked !== checked) {
                    this.setState({
                        checked: checked
                    });
                }
            }
        }, {
            key: '_onInputChange',
            value: function _onInputChange(e) {
                this.setState({
                    checked: e.target.checked
                });

                if (this.props.onChange) {
                    this.props.onChange(e);
                }
            }
        }, {
            key: 'val',
            value: function val() {
                return this.state.checked;
            }
        }, {
            key: 'render',
            value: function render() {
                var template = _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

                template.block = 'checkbox';

                template.mods = _extends({}, template.mods, {
                    checked: this.state.checked
                });

                template.content[0].props = _extends({}, template.content[0].props, {
                    type: 'checkbox',
                    checked: this.state.checked,
                    onChange: this._onInputChange.bind(this)
                });

                return template;
            }
        }]);

        return _class;
    })((0, _inputRawStyles2['default'])(Base));
};

module.exports = exports['default'];