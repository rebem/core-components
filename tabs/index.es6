export default Base => class extends Base {
    static get displayName() {
        return 'core: tabs';
    }

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    _onTabClick(i) {
        this.setState({
            selectedIndex: i
        });

        if (this.props._onTabChange) {
            this.props._onTabChange(i);
        }
    }

    _getTitles() {
        return this.props.children.map((child, i) => {
            return {
                elem: 'title',
                props: {
                    onClick: this._onTabClick.bind(this, i),
                    key: 'title' + i
                },
                mods: {
                    selected: this.state.selectedIndex === i
                },
                content: {
                    elem: 'title-inner',
                    content: child.title
                }
            };
        });
    }

    _getPanels() {
        return this.props.children.map((child, i) => {
            return {
                elem: 'panel',
                props: {
                    key: 'panel' + i
                },
                mods: {
                    selected: this.state.selectedIndex === i
                },
                content: child.content
            };
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
