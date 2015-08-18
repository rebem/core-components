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
            key: '_renderLabel',
            value: function _renderLabel() {
                return {
                    elem: 'label',
                    props: {
                        key: 'label'
                    },
                    content: this.props._labelText
                };
            }
        }, {
            key: '_renderControl',
            value: function _renderControl() {
                return {
                    elem: 'control',
                    props: {
                        key: 'control'
                    },
                    content: this.props.children
                };
            }
        }, {
            key: 'render',
            value: function render() {
                return {
                    block: 'label-group',
                    mods: {
                        'control-position': this.props._controlPosition
                    },
                    tag: 'label',
                    content: this.props._controlPosition === 'right' ? [this._renderLabel(), this._renderControl()] : [this._renderControl(), this._renderLabel()]
                };
            }
        }], [{
            key: 'displayName',
            get: function get() {
                return 'core: label-group';
            }
        }, {
            key: 'defaultProps',
            value: {
                _controlPosition: 'right'
            },
            enumerable: true
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];