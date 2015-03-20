import InputClass from '#input?raw&-styles';

export default Base => class extends InputClass(Base) {
    static get displayName() {
        return 'core: colorpicker';
    }

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
