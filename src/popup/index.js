import { Component, PropTypes } from 'react';
import { BEM } from '@yummies/bem';
import UID from 'component-uid';

const block = 'popup';
const ESC_KEYCODE = 27;
const UID_LENGTH = 20;

export default class extends Component {
    static displayName = `core: ${block}`;
    static propTypes = {
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            visibility: false
        };

        this._onChange = this._onChange.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
    }

    _onKeyUp(e) {
        if (e.keyCode === ESC_KEYCODE) {
            this.hide();
        }
    }

    _onChange(e) {
        if (!e.target.checked) {
            this.hide();
        }
    }

    show() {
        this.refs.popup.focus();

        this.setState({
            visibility: true
        });

        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    hide() {
        this.setState({
            visibility: false
        });

        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    render() {
        const popupID = 'popup-' + UID(UID_LENGTH);

        return BEM(
            {
                ...this.props,
                block,
                mods: {
                    visible: this.state.visibility
                },
                tabIndex: -1,
                onKeyUp: this._onKeyUp,
                ref: 'popup'
            },
            BEM({
                block,
                elem: 'switcher',
                tag: 'input',
                type: 'checkbox',
                id: popupID,
                checked: this.state.visibility,
                onChange: this._onChange
            }),
            BEM(
                {
                    block,
                    elem: 'wrapper'
                },
                BEM({
                    block,
                    elem: 'overlay',
                    tag: 'label',
                    htmlFor: popupID
                }),
                BEM(
                    {
                        block,
                        elem: 'inner'
                    },
                    BEM(
                        {
                            block,
                            elem: 'content'
                        },
                        this.props.children
                    )
                )
            )
        );
    }
}
