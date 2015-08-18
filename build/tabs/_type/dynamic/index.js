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
            key: '_onNewTabClick',
            value: function _onNewTabClick() {
                if (this.props._onNewTab) {
                    this.props._onNewTab();
                }
            }
        }, {
            key: '_onDeleteTabClick',
            value: function _onDeleteTabClick(i, e) {
                var _this = this;

                e.stopPropagation();

                if (this.props._tabs.length > 1) {
                    if (i <= this.state.selected) {
                        this.setState({
                            selected: this.state.selected ? this.state.selected - 1 : 0
                        }, function () {
                            if (_this.props._onDeleteTab) {
                                _this.props._onDeleteTab(i);
                            }
                        });
                    } else if (this.props._onDeleteTab) {
                        this.props._onDeleteTab(i);
                    }
                }
            }
        }, {
            key: '_getDeleteButton',
            value: function _getDeleteButton(i) {
                return {
                    elem: 'delete',
                    props: {
                        onClick: this._onDeleteTabClick.bind(this, i),
                        key: 'delete'
                    }
                };
            }
        }, {
            key: '_getTitles',
            value: function _getTitles() {
                var _this2 = this;

                var titles = _get(Object.getPrototypeOf(_class.prototype), '_getTitles', this).call(this);

                if (this.props._tabs.length > 1) {
                    titles.forEach(function (title, i) {
                        title.content = [_extends({}, title.content, {
                            props: _extends({}, title.content.props, {
                                key: 'content'
                            })
                        }), _this2._getDeleteButton(i)];
                    });
                }

                titles.push({
                    elem: 'plus',
                    props: {
                        onClick: this._onNewTabClick.bind(this),
                        key: 'plus'
                    }
                });

                return titles;
            }
        }, {
            key: 'render',
            value: function render() {
                var template = _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

                template.mods = _extends({}, template.mods, {
                    type: 'dynamic'
                });

                return template;
            }
        }], [{
            key: 'displayName',
            get: function get() {
                return 'core: tabs/_type/dynamic';
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];