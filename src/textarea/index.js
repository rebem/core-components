import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: textarea';
    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };
    static defaultProps = {
        value: '',
        disabled: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value,
            focused: false,
            hovered: false
        };

        this._onInputChange = this._onInputChange.bind(this);
        this._onInputFocus = this._onInputFocus.bind(this);
        this._onInputBlur = this._onInputBlur.bind(this);
        this._onInputMouseLeave = this._onInputMouseLeave.bind(this);
        this._onInputMouseEnter = this._onInputMouseEnter.bind(this);
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
        return Yummies({
            block: 'textarea',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled,
                ...this.props.mods
            },
            mix: this.props.mix,
            content: [
                {
                    elem: 'control',
                    tag: 'textarea',
                    props: {
                        type: 'text',
                        ...this.props,
                        value: this.state.value,
                        onChange: this._onInputChange,
                        onFocus: this._onInputFocus,
                        onBlur: this._onInputBlur,
                        onMouseLeave: this._onInputMouseLeave,
                        onMouseEnter: this._onInputMouseEnter,
                        ref: 'control',
                        key: 'control'
                    }
                },
                ...[ this.props.children ]
            ]
        });
    }
}
