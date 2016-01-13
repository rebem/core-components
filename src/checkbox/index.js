import { Component, PropTypes } from 'react';
import BEM from '@yummies/bem';

export default class extends Component {
    static displayName = 'core: checkbox';
    static propTypes = {
        checked: PropTypes.bool,
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
        disabled: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            focused: false,
            hovered: false,
            checked: props.checked
        };

        this._onInputChange = this._onInputChange.bind(this);
        this._onInputFocus = this._onInputFocus.bind(this);
        this._onInputBlur = this._onInputBlur.bind(this);
        this._onInputMouseLeave = this._onInputMouseLeave.bind(this);
        this._onInputMouseEnter = this._onInputMouseEnter.bind(this);
    }

    componentWillReceiveProps({ checked }) {
        if (this.props.checked !== checked) {
            this.setState({
                checked
            });
        }
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
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
        return this.state.checked;
    }

    render() {
        return BEM({
            block: 'checkbox',
            tag: 'label',
            mods: {
                focused: this.state.focused,
                hovered: this.state.hovered,
                checked: this.state.checked,
                disabled: this.props.disabled,
                ...this.props.mods
            },
            mix: this.props.mix,
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    props: {
                        type: 'checkbox',
                        ...this.props,
                        checked: this.state.checked,
                        onChange: this._onInputChange,
                        onFocus: this._onInputFocus,
                        onBlur: this._onInputBlur,
                        onMouseLeave: this._onInputMouseLeave,
                        onMouseEnter: this._onInputMouseEnter,
                        ref: 'control',
                        key: 'control'
                    }
                },
                ...[].concat(this.props.children)
            ]
        });
    }
}
