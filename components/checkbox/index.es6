import InputClass from '@input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: checkbox';
    }

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            checked: props.defaultChecked
        };
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        let template = super.render();

        template.block = 'checkbox';

        template.mods = {
            ...template.mods,
            checked: this.state.checked
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'checkbox',
            checked: this.state.checked,
            onChange: this._onInputChange
        };

        return template;
    }
};
