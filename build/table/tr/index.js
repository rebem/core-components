'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (Base) {
    return (function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(_class, [{
            key: 'render',
            value: function render() {
                return {
                    block: 'table',
                    elem: 'row',
                    tag: 'tr',
                    props: this.props,
                    content: this.props.children
                };
            }
        }], [{
            key: 'displayName',
            get: function get() {
                return 'core: TableRow';
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];