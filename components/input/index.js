import { filterPropsFor, filterPropsExcept } from 'react-attrs-filter';

export default Base => class extends Base {
    static get displayName() {
        return 'core: input';
    }

    constructor(props) {
        super(props);

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

    val(newValue) {
        if (typeof newValue !== 'undefined') {
            this.setState({
                value: newValue
            });
        } else {
            return this.state.value;
        }
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
            props: filterPropsExcept(this.props, 'input'),
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'text',
                        ...filterPropsFor(this.props, 'input'),
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
};
