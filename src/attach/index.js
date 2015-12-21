export default Base => class extends Base {
    static displayName = 'core: attach';
    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);

        this.state = {
            pressed: false,
            focused: false,
            hovered: false,
            value: null
        };
    }

    // file input doesn't allow to change it's value programmatically
    // componentWillReceiveProps() {}

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

    _renderValue() {
        if (!('value' in this.props)) {
            return null;
        }

        return {
            elem: 'value',
            tag: 'span',
            props: {
                key: 'value'
            },
            content: this.props.value
        };
    }

    _renderChildren() {
        return [].concat(this.props.children);
    }

    val() {
        return this.state.value;
    }

    render() {
        return {
            block: 'attach',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                pressed: this.state.pressed,
                disabled: this.props.disabled
            },
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'file',
                        ...this.props,
                        value: this.state.value,
                        onChange: ::this._onInputChange,
                        onFocus: ::this._onInputFocus,
                        onBlur: ::this._onInputBlur,
                        onMouseDown: ::this._onInputMouseDown,
                        onMouseUp: ::this._onInputMouseUp,
                        onMouseLeave: ::this._onInputMouseLeave,
                        onMouseEnter: ::this._onInputMouseEnter,
                        ref: 'control',
                        key: 'control'
                    }
                },
                this._renderValue(),
                ...this._renderChildren()
            ]
        };
    }
};
