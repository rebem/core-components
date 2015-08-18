'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _inputRawStyles = require('#input?raw&-styles');

var _inputRawStyles2 = _interopRequireDefault(_inputRawStyles);

exports['default'] = function (Base) {
    return (function (_InputClass) {
        _inherits(_class, _InputClass);

        function _class() {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(_class, [{
            key: 'render',
            value: function render() {
                var template = _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

                template.block = 'textarea';
                template.content[0].tag = 'textarea';

                return template;
            }
        }], [{
            key: 'displayName',
            get: function get() {
                return 'core: textarea';
            }
        }]);

        return _class;
    })((0, _inputRawStyles2['default'])(Base));
};

module.exports = exports['default'];