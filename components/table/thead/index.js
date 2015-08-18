export default Base => class extends Base {
    static get displayName() {
        return 'core: TableHead';
    }

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
