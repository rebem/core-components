import UID from 'component-uid';
import EventEmitter from 'eventemitter3';

const UID_LENGTH = 20;
const radioGroup = new EventEmitter();

export default Base => class extends Base {
    static displayName = 'core: radio';
    static defaultProps = {
        checked: false
    };

    constructor(props, context) {
        super(props, context);

        this._uid = UID(UID_LENGTH);
        this.state = {
            ...this.state,
            checked: props.checked
        };

        this._onRadioGroupChange = this._onRadioGroupChange.bind(this);
    }

    componentDidMount() {
        radioGroup.on('change', this._onRadioGroupChange);
    }

    componentWillReceiveProps({ checked }) {
        if (this.props.checked !== checked) {
            this.setState({
                checked
            });
        }
    }

    componentWillUnmount() {
        radioGroup.off('change', this._onRadioGroupChange);
    }

    _onRadioGroupChange({ form, id }) {
        if (this.refs.control.form === form && this._uid !== id) {
            this.setState({
                checked: false
            });
        }
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
        });

        radioGroup.emit('change', {
            form: this.refs.control.form,
            id: this._uid
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    _onInputFocus(e) {
        this.setState({
            focused: true
        });

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    _onInputBlur(e) {
        this.setState({
            focused: false
        });

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    _onInputMouseEnter(e) {
        this.setState({
            hovered: true
        });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }
    }

    _onInputMouseLeave(e) {
        this.setState({
            hovered: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    render() {
        return {
            block: 'radio',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                checked: this.state.checked,
                disabled: this.props.disabled
            },
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'radio',
                        ...this.props,
                        checked: this.state.checked,
                        onChange: ::this._onInputChange,
                        onFocus: ::this._onInputFocus,
                        onBlur: ::this._onInputBlur,
                        onMouseLeave: ::this._onInputMouseLeave,
                        onMouseEnter: ::this._onInputMouseEnter,
                        ref: 'control',
                        key: 'control'
                    }
                },
                ...[ this.props.children ]
            ]
        };
    }
};
