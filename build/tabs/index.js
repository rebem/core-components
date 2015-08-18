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

        _createClass(_class, null, [{
            key: 'displayName',
            get: function get() {
                return 'core: tabs';
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

            this.state = {
                selected: this.props._selected || 0
            };
        }

        _createClass(_class, [{
            key: '_getTitles',
            value: function _getTitles() {
                var _this = this;

                return this.props._tabs.map(function (child, i) {
                    return {
                        elem: 'title',
                        props: {
                            onClick: _this.selectTab.bind(_this, i),
                            key: 'title' + i
                        },
                        mods: {
                            selected: _this.state.selected === i
                        },
                        content: {
                            elem: 'title-inner',
                            content: child.title
                        }
                    };
                });
            }
        }, {
            key: '_getPanels',
            value: function _getPanels() {
                var _this2 = this;

                return this.props._tabs.map(function (child, i) {
                    return {
                        elem: 'panel',
                        props: {
                            key: 'panel' + i
                        },
                        mods: {
                            selected: _this2.state.selected === i
                        },
                        content: child.content
                    };
                });
            }
        }, {
            key: 'selectTab',
            value: function selectTab(i) {
                var _this3 = this;

                this.setState({
                    selected: i
                }, function () {
                    if (_this3.props._onTabChange) {
                        _this3.props._onTabChange(i);
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                return {
                    block: 'tabs',
                    content: [{
                        elem: 'titles',
                        props: {
                            key: 'titles'
                        },
                        content: this._getTitles()
                    }, {
                        elem: 'panels',
                        props: {
                            key: 'panels'
                        },
                        content: this._getPanels()
                    }]
                };
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];