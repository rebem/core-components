export default Base => class extends Base {
    static get displayName() {
        return 'core: Table';
    }

    render() {
        return {
            block: 'table',
            tag: 'table',
            props: this.props,
            content: this.props.children
        };
    }
};
