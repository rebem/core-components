export default Base => class extends Base {
    static get displayName() {
        return 'core: TableCell';
    }

    render() {
        return {
            block: 'table',
            elem: 'cell',
            tag: 'td',
            props: this.props,
            content: this.props.children
        };
    }
};
