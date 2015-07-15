export default Base => class extends Base {
    static get displayName() {
        return 'core: Table';
    }

    _renderHeadCells() {
        return this.props._cols.map(col => {
            return {
                tag: 'th',
                elem: 'cell',
                mods: {
                    type: 'head'
                },
                props: {
                    key: `head-cell-${col.name}`
                },
                content: col.content
            };
        });
    }

    _renderHead() {
        return {
            tag: 'thead',
            elem: 'head',
            props: {
                key: 'head'
            },
            content: this._renderHeadCells()
        };
    }

    _renderRowCells(row) {
        return this.props._cols
            .filter(({ name }) => name in row)
            .map(({ name }, index) => {
                return {
                    tag: 'td',
                    elem: 'cell',
                    mods: {
                        type: 'body'
                    },
                    props: {
                        key: `cell-${index}`
                    },
                    content: row[name]
                };
            });
    }

    _renderRows() {
        return this.props._rows.map((row, index) => {
            return {
                tag: 'tr',
                elem: 'row',
                props: {
                    key: `row-${index}`
                },
                content: this._renderRowCells(row)
            };
        });
    }

    _renderBody() {
        return {
            tag: 'tbody',
            elem: 'body',
            props: {
                key: 'body'
            },
            content: this._renderRows()
        };
    }

    render() {
        return {
            tag: 'table',
            block: 'table',
            props: this.props,
            content: [
                this._renderHead(),
                this._renderBody()
            ]
        };
    }
};
