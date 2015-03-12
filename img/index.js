export default Base => class extends Base {
    render() {
        return {
            block: 'img',
            tag: 'img',
            props: this.props
        };
    }
};
