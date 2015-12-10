export default Base => class extends Base {
    static displayName = 'core: tabs';
    static defaultProps = {
        selected: 0,
        tabs: []
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        };
    }

    _getTitles() {
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

    _getPanels() {
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
                    content: this._getTitles()
                },
                {
                    elem: 'panels',
                    props: {
                        key: 'panels'
                    },
                    content: this._getPanels()
                }
            ]
        };
    }
};
