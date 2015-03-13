export default Base => class extends Base {
    static get displayName() {
        return 'core: tabs/_type/dynamic';
    }

    _onNewTabClick() {
        if (this.props._onNewTab) {
            this.props._onNewTab();
        }
    }

    render() {
        let template = super.render();

        template.mods = {
            ...template.mods,
            type: 'dynamic'
        };

        template.content[0].content.push({
            elem: 'plus',
            props: {
                onClick: this._onNewTabClick,
                key: 'plus'
            },
            content: '+'
        });

        return template;
    }
};
