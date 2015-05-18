import InputClass from '#input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: button';
    }

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            pressed: false
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

    render() {
        let template = super.render();

        template.block = 'button';

        template.mods = {
            ...template.mods,
            pressed: this.state.pressed
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'button',
            onMouseDown: ::this._onInputMouseDown,
            onMouseUp: ::this._onInputMouseUp,
            onMouseLeave: ::this._onInputMouseLeave
        };

        return template;
    }
};
