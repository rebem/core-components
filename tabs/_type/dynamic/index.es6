export default Base => class extends Base {
    static get displayName() {
        return 'core: tabs/_type/dynamic';
    }

    _onNewTabClick() {
        if (this.props._onNewTab) {
            this.props._onNewTab();
        }
    }

    _getTitles() {
        let titles = super._getTitles();

        titles.forEach(title => {
            title.content = [
                title.content,
                {
                    elem: 'delete',
                    key: 'delete'
                }
            ];
        });

        titles.push({
            elem: 'plus',
            props: {
                onClick: this._onNewTabClick,
                key: 'plus'
            },
            content: '+'
        });

        return titles;
    }

    render() {
        let template = super.render();

        template.mods = {
            ...template.mods,
            type: 'dynamic'
        };

        return template;
    }
};
