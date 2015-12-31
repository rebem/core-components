import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: colorpicker';
    static propTypes = {
        value: (props, propName, componentName) => {
            if (!/#([A-Fa-f0-9]{6})$/.test(props[propName])) {
                return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`valid simple color\` (http://www.w3.org/TR/html5/infrastructure.html#valid-simple-color)`);
            }
        },
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };
    static defaultProps = {
        value: '#000000',
        disabled: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value,
            focused: false,
            hovered: false
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
            hovered: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    val() {
        return this.state.value;
    }

    render() {
        return {
            block: 'colorpicker',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled
            },
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'color',
                        ...this.props,
                        value: this.state.value,
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
}
