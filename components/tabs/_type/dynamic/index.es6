export default Base => class extends Base {
    static get displayName() {
        return 'core: tabs/_type/dynamic';
    }

    _onNewTabClick() {
        if (this.props._onNewTab) {
            this.props._onNewTab();
        }
    }

    _onDeleteTabClick(i, e) {
        e.stopPropagation();

        if (this.props._tabs.length > 1) {
            if (i <= this.state.selected) {
                this.setState({
                    selected: this.state.selected ? this.state.selected - 1 : 0
                }, () => {
                    if (this.props._onDeleteTab) {
                        this.props._onDeleteTab(i);
                    }
                });
            } else {
                if (this.props._onDeleteTab) {
                    this.props._onDeleteTab(i);
                }
            }
        }
    }

    _getTitles() {
        let titles = super._getTitles();

        if (this.props._tabs.length > 1) {
            titles.forEach((title, i) => {
                title.content = [
                    {
                        ...title.content,
                        props: {
                            ...title.content.props,
                            key: 'content'
                        }
                    },
                    {
                        elem: 'delete',
                        props: {
                            onClick: this._onDeleteTabClick.bind(this, i),
                            key: 'delete'
                        }
                    }
                ];
            });
        }

        titles.push({
            elem: 'plus',
            props: {
                onClick: this._onNewTabClick,
                key: 'plus'
            }
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
