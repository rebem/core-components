export default Base => class extends Base {
    static displayName = 'core: TableBody';

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
