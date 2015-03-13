export default Base => class extends Base {
    static get displayName() {
        return 'core: fieldset';
    }

    render() {
        return {
            block: 'fieldset',
            content: [
                {
                    elem: 'label',
                    tag: 'label',
                    props: {
                        htmlFor: this.props._parentID,
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
