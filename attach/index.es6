import InputClass from '@input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: attach';
    }

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            pressed: false,
            value: null
        };
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

    _onInputMouseLeave(e) {
        super._onInputMouseLeave(e);

        this.setState({
            pressed: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    }

    val() {
        return this.state.value;
    }

    render() {
        let template = super.render();

        template.block = 'attach';

        template.mods = {
            ...template.mods,
            pressed: this.state.pressed
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'file',
            onMouseDown: this._onInputMouseDown,
            onMouseUp: this._onInputMouseUp,
            onMouseLeave: this._onInputMouseLeave
        };

        template.content.splice(1, 0, {
            elem: 'value',
            props: {
                key: 'value'
            },
            content: this.props.value
        });

        return template;
    }
};
