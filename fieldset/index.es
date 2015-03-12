export default Base => class extends Base {
    render() {
        return {
            block: 'fieldset',
            content: [
                {
                    elem: 'label',
                    tag: 'label',
                    props: {
                        htmlFor: this.props.parentID,
                        key: 'label'
                    },
                    content: this.props.labelText
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
