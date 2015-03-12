import reactProps from 'react-attrs-map';

const inputOnlyProps = reactProps('input');

export default Base => class extends Base {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            focused: false,
            hovered: false
        };
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
            hovered: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    val(newValue) {
        if (!newValue) {
            return this.state.value;
        }

        this.setState({
            value: newValue
        });
    }

    render() {
        return {
            block: 'input',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled || false
            },
            props: this.propsExclude(inputOnlyProps),
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    ref: 'control',
                    props: {
                        key: 'control',
                        ...this.propsFrom(inputOnlyProps),
                        value: this.state.value,
                        onChange: this._onInputChange,
                        onFocus: this._onInputFocus,
                        onBlur: this._onInputBlur,
                        onMouseLeave: this._onInputMouseLeave,
                        onMouseEnter: this._onInputMouseEnter
                    }
                },
                ...[ this.props.children ]
            ]
        };
    }
};
