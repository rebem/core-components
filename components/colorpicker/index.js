import InputClass from '#input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static displayName = 'core: colorpicker';

    render() {
        const template = super.render();

        template.block = 'colorpicker';

        template.content[0].props = {
            ...template.content[0].props,
            type: 'color'
        };

        return template;
    }
};
