import InputClass from '#input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: textarea';
    }

    render() {
        const template = super.render();

        template.block = 'textarea';
        template.content[0].tag = 'textarea';

        return template;
    }
};
