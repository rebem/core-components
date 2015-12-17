import UID from 'component-uid';

const ESC_KEYCODE = 27;
const UID_LENGTH = 20;

export default Base => class extends Base {
    static displayName = 'core: popup';

    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };
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
        }, () => {
            if (this.props.onShow) {
                this.props.onShow();
            }
        });
    }

    hide() {
        this.setState({
            visibility: false
        }, () => {
            if (this.props.onHide) {
                this.props.onHide();
            }
        });
    }

    render() {
        const popupID = 'popup-' + UID(UID_LENGTH);

        return {
            block: 'popup',
            props: {
                tabIndex: -1,
                onKeyUp: ::this._onKeyUp,
                ref: 'popup'
            },
            content: [
                {
                    elem: 'switcher',
                    tag: 'input',
                    props: {
                        type: 'checkbox',
                        id: popupID,
                        checked: this.state.visibility,
                        onChange: ::this._onChange,
                        key: 'switcher'
                    }
                },
                {
                    elem: 'wrapper',
                    props: {
                        key: 'wrapper'
                    },
                    content: [
                        {
                            elem: 'overlay',
                            tag: 'label',
                            props: {
                                htmlFor: popupID,
                                key: 'overlay'
                            }
                        },
                        {
                            elem: 'inner',
                            props: {
                                key: 'inner'
                            },
                            content: {
                                elem: 'content',
                                content: this.props.children
                            }
                        }
                    ]
                }
            ]
        };
    }
};
