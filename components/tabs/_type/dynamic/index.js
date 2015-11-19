export default Base => class extends Base {
    static displayName = 'core: tabs/_type/dynamic';

    _onNewTabClick() {
        if (this.props.onNewTab) {
            this.props.onNewTab();
        }
    }

    _onDeleteTabClick(i, e) {
        e.stopPropagation();

        if (this.props.tabs.length > 1) {
            if (i <= this.state.selected) {
                this.setState({
                    selected: this.state.selected ? this.state.selected - 1 : 0
                }, () => {
                    if (this.props.onDeleteTab) {
                        this.props.onDeleteTab(i);
                    }
                });
            } else if (this.props.onDeleteTab) {
                this.props.onDeleteTab(i);
            }
        }
    }

    _getDeleteButton(i) {
        return {
            elem: 'delete',
            props: {
                onClick: this._onDeleteTabClick.bind(this, i),
                key: 'delete'
            }
        };
    }

    _getTitles() {
        const titles = super._getTitles();

        if (this.props.tabs.length > 1) {
            titles.forEach((title, i) => {
                title.content = [
                    {
                        ...title.content,
                        props: {
                            ...title.content.props,
                            key: 'content'
                        }
                    },
                    this._getDeleteButton(i)
                ];
            });
        }

        titles.push({
            elem: 'plus',
            props: {
                onClick: ::this._onNewTabClick,
                key: 'plus'
            }
        });

        return titles;
    }

    render() {
        const template = super.render();

        template.mods = {
            ...template.mods,
            type: 'dynamic'
        };

        return template;
    }
};
