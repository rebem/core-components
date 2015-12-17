export default Base => class extends Base {
    static displayName = 'core: link';

    render() {
        return {
            block: 'link',
            tag: 'a',
            props: this.props,
            content: this.props.children
        };
    }
};
