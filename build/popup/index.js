'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _componentUid = require('component-uid');

var _componentUid2 = _interopRequireDefault(_componentUid);

exports['default'] = function (Base) {
    return (function (_Base) {
        _inherits(_class, _Base);

        _createClass(_class, null, [{
            key: 'displayName',
            get: function get() {
                return 'core: popup';
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

            this.state = {
                visibility: false
            };

            this._onKeyUp = this._onKeyUp.bind(this);
        }

        _createClass(_class, [{
            key: '_onKeyUp',
            value: function _onKeyUp(e) {
                // hide on Esc
                if (e.keyCode === 27) {
                    this.hide();
                }
            }
        }, {
            key: '_onChange',
            value: function _onChange(e) {
                if (e.target.checked) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        }, {
            key: 'show',
            value: function show() {
                var _this = this;

                // todo will broke when rendering on server
                window.addEventListener('keyup', this._onKeyUp);

                this.setState({
                    visibility: true
                }, function () {
                    if (_this.props._onShow) {
                        _this.props._onShow();
                    }
                });
            }
        }, {
            key: 'hide',
            value: function hide() {
                var _this2 = this;

                // todo will broke when rendering on server
                window.removeEventListener('keyup', this._onKeyUp);

                this.setState({
                    visibility: false
                }, function () {
                    if (_this2.props._onHide) {
                        _this2.props._onHide();
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var popupID = 'popup-' + (0, _componentUid2['default'])(20);

                return {
                    block: 'popup',
                    onKeyUp: this._onKeyUp,
                    content: [{
                        elem: 'switcher',
                        tag: 'input',
                        props: {
                            type: 'checkbox',
                            id: popupID,
                            checked: this.state.visibility,
                            onChange: this._onChange.bind(this),
                            key: 'switcher'
                        }
                    }, {
                        elem: 'wrapper',
                        props: {
                            key: 'wrapper'
                        },
                        content: [{
                            elem: 'overlay',
                            tag: 'label',
                            props: {
                                htmlFor: popupID,
                                key: 'overlay'
                            }
                        }, {
                            elem: 'inner',
                            props: {
                                key: 'inner'
                            },
                            content: {
                                elem: 'content',
                                content: this.props.children
                            }
                        }]
                    }]
                };
            }
        }]);

        return _class;
    })(Base);
};

module.exports = exports['default'];