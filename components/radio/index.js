import InputClass from '#input?raw&-styles';

const cache = {};

export default Base => class extends InputClass(Base) {
    static displayName = 'core: radio';
    static defaultProps = {
        checked: false
    };

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
        cache[this.props.name] = cache[this.props.name].filter(cached => cached !== this);
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
        const template = super.render();

        template.block = 'radio';

        template.mods = {
            ...template.mods,
            checked: this.state.checked
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'radio',
            checked: this.state.checked,
            onChange: ::this._onInputChange
        };

        return template;
    }
};
