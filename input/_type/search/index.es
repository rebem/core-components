export default Base => class extends Base {
    render() {
        const template = super.render();

        template.mods = {
            ...template.mods,
            type: 'search'
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'search',
            autoComplete: 'off',
            autoCapitalize: 'off',
            autoCorrect: 'off',
            spellCheck: 'off'
        };

        return template;
    }
};
