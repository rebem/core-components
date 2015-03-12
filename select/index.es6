import reactProps from 'react-attrs-map';

const selectOnlyProps = reactProps('select');

export default Base => class extends Base {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue || null,
            hovered: false,
            focused: false
        };
    }

    _onSelectChange(e) {
        this.setState({
            value: e.target.value
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    _onSelectMouseEnter(e) {
        this.setState({
            hovered: true
        });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }
    }

    _onSelectMouseLeave(e) {
        this.setState({
            hovered: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    _onSelectFocus(e) {
        this.setState({
            focused: true
        });

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    _onSelectBlur(e) {
        this.setState({
            focused: false
        });

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    val() {
        return this.state.value;
    }

    getOptions() {
        return this.props._options.map(option => {
            return {
                elem: 'option',
                tag: 'option',
                content: option.text,
                props: {
                    key: 'option' + option.value || option.text,
                    selected: option.selected,
                    value: option.value
                }
            };
        });
    }

    render() {
        return {
            block: 'select',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled || false
            },
            props: this.propsExclude(selectOnlyProps),
            content: [
                {
                    elem: 'control',
                    tag: 'select',
                    ref: 'control',
                    props: {
                        key: 'control',
                        ...this.propsFrom(selectOnlyProps),
                        onChange: this._onSelectChange,
                        onFocus: this._onSelectFocus,
                        onBlur: this._onSelectBlur,
                        onMouseLeave: this._onSelectMouseLeave,
                        onMouseEnter: this._onSelectMouseEnter
                    },
                    content: this.getOptions()
                },
                ...[ this.props.children ]
            ]
        };
    }
};
