export default Base => class extends Base {
    static displayName = 'core: img';

    render() {
        return {
            block: 'img',
            tag: 'img',
            props: this.props
        };
    }
};
