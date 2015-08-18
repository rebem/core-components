export default Base => class extends Base {
    static get displayName() {
        return 'core: img';
    }

    render() {
        return {
            block: 'img',
            tag: 'img',
            props: this.props
        };
    }
};
