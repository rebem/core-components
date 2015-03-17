export default Base => class extends Base {
    static get displayName() {
        return 'core: input/_type/simple';
    }

    render() {
        const template = super.render();

        template.mods = {
            ...template.mods,
            type: 'simple'
        };

        template.content[0].props = {
            ...template.content[0].props,
            type: 'text',
            autoComplete: 'off',
            autoCapitalize: 'off',
            autoCorrect: 'off',
            spellCheck: 'off'
        };

        return template;
    }
};
