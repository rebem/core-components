import UID from 'component-uid';

export default Base => class extends Base {
    static get displayName() {
        return 'core: popup';
    }

    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };
    }

    _onKeyUp(e) {

        // hide on Esc
        if (e.keyCode === 27) {
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
            if (this.props._onShow) {
                this.props._onShow();
            }
        });
    }

    hide() {
        // todo will broke when rendering on server
        window.removeEventListener('keyup', this._onKeyUp);

        this.setState({
            visibility: false
        }, () => {
            if (this.props._onHide) {
                this.props._onHide();
            }
        });
    }

    render() {
        const popupID = 'popup-' + UID(20);

        return {
            block: 'popup',
            onKeyUp: ::this._onKeyUp,
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
