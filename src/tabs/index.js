export default Base => class extends Base {
    static displayName = 'core: tabs';
    static defaultProps = {
        selected: 0,
        tabs: []
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: this.props.selected
        };
    }

    _renderTitles() {
        return this.props.tabs.map((child, i) => {
            return {
                elem: 'title',
                props: {
                    onClick: this.selectTab.bind(this, i),
                    key: 'title' + i
                },
                mods: {
                    selected: this.state.selected === i
                },
                content: {
                    elem: 'title-inner',
                    content: child.title
                }
            };
        });
    }

    _renderPanels() {
        return this.props.tabs.map((child, i) => {
            return {
                elem: 'panel',
                props: {
                    key: 'panel' + i
                },
                mods: {
                    selected: this.state.selected === i
                },
                content: child.content
            };
        });
    }

    selectTab(i) {
        this.setState({
            selected: i
        }, () => {
            if (this.props.onTabChange) {
                this.props.onTabChange(i);
            }
        });
    }

    render() {
        return {
            block: 'tabs',
            content: [
                {
                    elem: 'titles',
                    props: {
                        key: 'titles'
                    },
                    content: this._renderTitles()
                },
                {
                    elem: 'panels',
                    props: {
                        key: 'panels'
                    },
                    content: this._renderPanels()
                }
            ]
        };
    }
};
