import { Component } from '@yummies/yummies';
import Titles from '#tabs/titles';
import Title from '#tabs/title';

export default class extends Component {
    static displayName = 'core: tabs';
    static defaultProps = {
        tabs: []
    };

    renderTitles() {
        if ('renderTitles' in this.props) {
            return this.props.renderTitles();
        }

        return Titles(
            {
                ...this.props,
                key: 'titles'
            },
            this.props.tabs.map((tab, index) => {
                return Title({
                    title: tab.title,
                    index,
                    ...this.props,
                    key: index
                });
            })
        );
    }

    renderPanels() {
        return this.props.tabs.map((tab, index) => {
            return {
                elem: 'panel',
                props: {
                    key: 'panel' + index
                },
                mods: {
                    selected: this.props.selected === index
                },
                content: tab.content
            };
        });
    }

    render() {
        return {
            block: 'tabs',
            content: [
                this.renderTitles(),
                {
                    elem: 'panels',
                    props: {
                        key: 'panels'
                    },
                    content: this.renderPanels()
                }
            ]
        };
    }
}
