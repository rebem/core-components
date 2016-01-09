import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: button';
    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        disabled: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func,
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
            hovered: false,
            pressed: false
        };

        this._onInputFocus = this._onInputFocus.bind(this);
        this._onInputBlur = this._onInputBlur.bind(this);
        this._onInputMouseLeave = this._onInputMouseLeave.bind(this);
        this._onInputMouseEnter = this._onInputMouseEnter.bind(this);
        this._onInputMouseDown = this._onInputMouseDown.bind(this);
        this._onInputMouseUp = this._onInputMouseUp.bind(this);
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

    render() {
        return Yummies({
            block: 'button',
            tag: 'span',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled,
                pressed: this.state.pressed,
                ...this.props.mods
            },
            mix: this.props.mix,
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'button',
                        ...this.props,
                        value: this.state.value,
                        onFocus: this._onInputFocus,
                        onBlur: this._onInputBlur,
                        onMouseLeave: this._onInputMouseLeave,
                        onMouseEnter: this._onInputMouseEnter,
                        onMouseDown: this._onInputMouseDown,
                        onMouseUp: this._onInputMouseUp,
                        ref: 'control',
                        key: 'control'
                    }
                },
                ...[ this.props.children ]
            ]
        });
    }
}
