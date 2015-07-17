export default Base => class extends Base {
    static get displayName() {
        return 'core: TableBody';
    }

    render() {
        return {
            block: 'table',
            elem: 'body',
            tag: 'tbody',
            props: this.props,
            content: this.props.children
        };
    }
};
