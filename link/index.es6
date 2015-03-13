export default Base => class extends Base {
    static get displayName() {
        return 'core: link';
    }

    render() {
        return {
            block: 'link',
            tag: 'a',
            props: this.props,
            content: this.props.children
        };
    }
};
