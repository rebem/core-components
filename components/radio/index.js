import UID from 'component-uid';
import EventEmitter from 'eventemitter3';

import InputClass from '#input?raw&-styles';

const UID_LENGTH = 20;
const radioGroup = new EventEmitter();

export default Base => class extends InputClass(Base) {
    static displayName = 'core: radio';
    static defaultProps = {
        checked: false
    };

    constructor(props) {
        super(props);

        this._uid = UID(UID_LENGTH);
        this.state = {
            ...this.state,
            checked: props.checked
        };

        this._onRadioGroupChange = this._onRadioGroupChange.bind(this);
    }

    componentDidMount() {
        radioGroup.on('change', this._onRadioGroupChange);
    }

    componentWillReceiveProps({ checked }) {
        if (this.props.checked !== checked) {
            this.setState({
                checked
            });
        }
    }

    componentWillUnmount() {
        radioGroup.off('change', this._onRadioGroupChange);
    }

    _onRadioGroupChange({ form, id }) {
        if (this.refs.control.form === form && this._uid !== id) {
            this.setState({
                checked: false
            });
        }
    }

    _onInputChange(e) {
        this.setState({
            checked: e.target.checked
        });

        radioGroup.emit('change', {
            form: this.refs.control.form,
            id: this._uid
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
