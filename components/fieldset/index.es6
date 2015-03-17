export default Base => class extends Base {
    static get displayName() {
        return 'core: fieldset';
    }

    render() {
        return {
            block: 'fieldset',
            tag: 'label',
            content: [
                {
                    elem: 'label',
                    props: {
                        key: 'label'
                    },
                    content: this.props._labelText
                },
                {
                    elem: 'control',
                    props: {
                        key: 'control'
                    },
                    content: this.props.children
                }
            ]
        };
    }
};
