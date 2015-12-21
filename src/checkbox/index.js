export default Base => class extends Base {
    static displayName = 'core: checkbox';

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            hovered: false,
            checked: props.checked
        };
    }

    componentWillReceiveProps({ checked }) {
        if (this.props.checked !== checked) {
            this.setState({
                checked
            });
        }
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
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

    val() {
        return this.state.checked;
    }

    render() {
        return {
            block: 'checkbox',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                checked: this.state.checked,
                disabled: this.props.disabled || false
            },
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'checkbox',
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
