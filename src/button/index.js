export default Base => class extends Base {
    static displayName = 'core: button';

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            focused: false,
            hovered: false,
            pressed: false
        };
    }

    componentWillReceiveProps({ value }) {
        if (this.props.value !== value) {
            this.setState({
                value
            });
        }
    }

    _onInputChange(e) {
        this.setState({
            value: e.target.value
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
            hovered: false,
            pressed: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    _onInputMouseDown(e) {
        this.setState({
            pressed: true
        });

        if (this.props.onMouseDown) {
            this.props.onMouseDown(e);
        }
    }

    _onInputMouseUp(e) {
        this.setState({
            pressed: false
        });

        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    }

    val() {
        return this.state.value;
    }

    render() {
        return {
            block: 'button',
            tag: 'span',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled || false,
                pressed: this.state.pressed
            },
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'button',
                        ...this.props,
                        value: this.state.value,
                        onChange: ::this._onInputChange,
                        onFocus: ::this._onInputFocus,
                        onBlur: ::this._onInputBlur,
                        onMouseLeave: ::this._onInputMouseLeave,
                        onMouseEnter: ::this._onInputMouseEnter,
                        onMouseDown: ::this._onInputMouseDown,
                        onMouseUp: ::this._onInputMouseUp,
                        ref: 'control',
                        key: 'control'
                    }
                },
                ...[ this.props.children ]
            ]
        };
    }
};
