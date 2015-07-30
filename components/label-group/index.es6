export default Base => class extends Base {
    static get displayName() {
        return 'core: label-group';
    };
    static defaultProps = {
        _controlPosition: 'right'
    };

    _renderLabel() {
        return {
            elem: 'label',
            props: {
                key: 'label'
            },
            content: this.props._labelText
        };
    }

    _renderControl() {
        return {
            elem: 'control',
            props: {
                key: 'control'
            },
            content: this.props.children
        };
    }

    render() {
        return {
            block: 'label-group',
            mods: {
                'control-position': this.props._controlPosition
            },
            tag: 'label',
            content: this.props._controlPosition === 'right' ?
                [
                    this._renderLabel(),
                    this._renderControl()
                ] :
                [
                    this._renderControl(),
                    this._renderLabel()
                ]
        };
    }
};
