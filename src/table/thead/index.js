export default Base => class extends Base {
    static displayName = 'core: TableHead';

    render() {
        return {
            block: 'table',
            elem: 'head',
            tag: 'thead',
            props: this.props,
            content: this.props.children
        };
    }
};
