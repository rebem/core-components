"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (Base) {
    return (function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);
        }

        _createClass(_class, [{
            key: "_propsExclude",

            // return props excluding propNames
            value: function _propsExclude(propNames) {
                var _this = this;

                var out = {};

                _Object$keys(this.props).forEach(function (propName) {
                    if (propNames.indexOf(propName) === -1) {
                        out[propName] = _this.props[propName];
                    }
                });

                return out;
            }

            // return only matched with propNames props
        }, {
            key: "_propsFrom",
            value: function _propsFrom(propNames) {
                var _this2 = this;

                var out = {};

                _Object$keys(this.props).forEach(function (propName) {
                    if (propNames.indexOf(propName) >= 0) {
                        out[propName] = _this2.props[propName];
                    }
                });

                return out;
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports["default"];