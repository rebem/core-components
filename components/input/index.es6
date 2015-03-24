import reactProps from 'react-attrs-map';

import MixinPropsFilter from '#_props-filter?raw';

const inputOnlyProps = reactProps('input');

export default Base => class extends Base {
    static get displayName() {
        return 'core: input';
    }

    static get mixins() {
        return [ MixinPropsFilter ];
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

    val() {
        return this.state.value;
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
            props: this._propsExclude(inputOnlyProps),
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    ref: 'control',
                    props: {
                        ...this._propsFrom(inputOnlyProps),
                        value: this.state.value,
                        onChange: this._onInputChange,
                        onFocus: this._onInputFocus,
                        onBlur: this._onInputBlur,
                        onMouseLeave: this._onInputMouseLeave,
                        onMouseEnter: this._onInputMouseEnter,
                        key: 'control'
                    }
                },
                ...[ this.props.children ]
            ]
        };
    }
};
