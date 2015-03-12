export default Base => class extends Base {
    render() {
        return {
            block: 'link',
            tag: 'a',
            props: this.props,
            content: this.props.children
        };
    }
};
