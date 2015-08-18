export default Base => class extends Base {
    static get displayName() {
        return 'core: TableRow';
    }

    render() {
        return {
            block: 'table',
            elem: 'row',
            tag: 'tr',
            props: this.props,
            content: this.props.children
        };
    }
};
