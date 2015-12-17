export default Base => class extends Base {
    static displayName = 'core: Table';

    render() {
        return {
            block: 'table',
            tag: 'table',
            props: this.props,
            content: this.props.children
        };
    }
};
