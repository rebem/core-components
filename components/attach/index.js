import InputClass from '#input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static displayName = 'core: attach';

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            pressed: false,
            value: null
        };
    }

    // file input doesn't allow to change it's value programmatically
    // componentWillReceiveProps() {}

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
        this.setState({
            pressed: false
        });

        if (super._onInputMouseLeave) {
            super._onInputMouseLeave(e);
        }
    }

    render() {
        const template = super.render();

        template.block = 'attach';

        template.mods = {
            ...template.mods,
            pressed: this.state.pressed
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'file',
            onMouseDown: ::this._onInputMouseDown,
            onMouseUp: ::this._onInputMouseUp,
            onMouseLeave: ::this._onInputMouseLeave
        };

        if ('value' in this.props) {
            template.content.push({
                elem: 'value',
                tag: 'span',
                props: {
                    key: 'value'
                },
                content: this.props.value
            });
        }

        return template;
    }
};
