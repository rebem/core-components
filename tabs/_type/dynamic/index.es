export default Base => class extends Base {
    onNewTabClick() {
        if (this.props.onNewTab) {
            this.props.onNewTab();
        }
    }
    buildTabs() {
        let tabs = super.buildTabs();

        tabs.content[0].content.push({
            elem: 'plus',
            props: {
                onClick: this.onNewTabClick,
                key: 'plus'
            },
            content: '+'
        });

        return tabs;
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
