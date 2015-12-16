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

        this._onKeyUp = this._onKeyUp.bind(this);
    }

    _onKeyUp(e) {
        // hide on Esc
        if (e.keyCode === ESC_KEYCODE) {
            this.hide();
        }
    }

    _onChange(e) {
        if (e.target.checked) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        // todo will broke when rendering on server
        window.addEventListener('keyup', this._onKeyUp);

        this.setState({
            visibility: true
        }, () => {
            if (this.props.onShow) {
                this.props.onShow();
            }
        });
    }

    hide() {
        // todo will broke when rendering on server
        window.removeEventListener('keyup', this._onKeyUp);

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
            mods: {
                visibility: this.state.visibility
            },
            onKeyUp: this._onKeyUp,
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
