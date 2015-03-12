import InputClass from '@input?raw';

export default Base => class extends InputClass(Base) {
    render() {
        const template = super.render();

        template.block = 'textarea';
        template.content[0].tag = 'textarea';

        return template;
    }
};
