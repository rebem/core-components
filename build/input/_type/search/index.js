'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

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
                var template = _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

                template.mods = _extends({}, template.mods, {
                    type: 'search'
                });

                template.content[0].props = _extends({}, template.content[0].props, {
                    type: 'search',
                    autoComplete: 'off',
                    autoCapitalize: 'off',
                    autoCorrect: 'off',
                    spellCheck: 'off'
                });

                return template;
            }
        }], [{
            key: 'displayName',
            get: function get() {
                return 'core: input/_type/search';
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];