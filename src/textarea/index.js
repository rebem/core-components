import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: textarea';

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value || '',
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
            block: 'textarea',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled || false
            },
            content: [
                {
                    elem: 'control',
                    tag: 'textarea',
                    props: {
                        type: 'text',
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
