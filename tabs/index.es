export default Base => class extends Base {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }
    onTabClick(i) {
        this.setState({
            selectedIndex: i
        });

        if (this.props.onTabChange) {
            this.props.onTabChange.call(this, i + 1);
        }
    }
    buildTabs() {
        const titles = {
            elem: 'titles',
            props: {
                key: 'titles'
            },
            content: []
        };
        const panels = {
            elem: 'panels',
            props: {
                key: 'panels'
            },
            content: []
        };

        this.props.children.forEach((child, i) => {
            titles.content.push({
                elem: 'title',
                props: {
                    onClick: this.onTabClick.bind(this, i),
                    // TODO: better key
                    key: 'title' + i
                },
                mods: {
                    selected: this.state.selectedIndex === i
                },
                content: {
                    elem: 'title-inner',
                    content: child.title
                }
            });

            panels.content.push({
                elem: 'panel',
                props: {
                    key: 'title' + i
                },
                mods: {
                    selected: this.state.selectedIndex === i
                },
                content: child.content
            });
        });

        return {
            block: 'tabs',
            content: [
                titles,
                panels
            ]
        };
    }
    render() {
        return this.buildTabs();
    }
};
