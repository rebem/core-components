import InputClass from '@input?raw';

export default Base => class extends InputClass(Base) {
    render() {
        let template = super.render();

        template.block = 'colorpicker';

        template.content[0].props = {
            ...template.content[0].props,
            type: 'color'
        };

        return template;
    }
};
