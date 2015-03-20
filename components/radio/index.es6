import InputClass from '#input?raw&-styles';

let cache = {};

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: radio';
    }

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            checked: props.checked
        };
    }

    componentWillMount() {
        cache[this.props.name] = cache[this.props.name] || [];
        cache[this.props.name].push(this);
    }

    componentWillReceiveProps({ checked }) {
        if (this.props.checked !== checked) {
            this.setState({
                checked
            });
        }
    }

    componentWillUnmount() {
        const index = cache[this.props.name].indexOf(index);

        if (index >= 0) {
            cache[this.props.name].splice(index, 1);
        }
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
        });

        cache[this.props.name].forEach(cached => {
            if (cached !== this && e.target.checked) {
                cached.setState({
                    checked: false
                });
            }
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        let template = super.render();

        template.block = 'radio';

        template.mods = {
            ...template.mods,
            checked: this.state.checked
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'radio',
            checked: this.state.checked,
            onChange: this._onInputChange
        };

        return template;
    }
};
