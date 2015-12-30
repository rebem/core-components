import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: tabs/title';

    selectTab() {
        if ('onTabChange' in this.props) {
            this.props.onTabChange(this.props.index);
        }
    }

    render() {
        return {
            block: 'tabs',
            elem: 'title',
            props: {
                onClick: ::this.selectTab
            },
            mods: {
                selected: this.props.selected === this.props.index
            },
            content: [
                {
                    elem: 'title-inner',
                    props: {
                        key: 'title'
                    },
                    content: this.props.title
                },
                ...[].concat(this.props.children)
            ]
        };
    }
}
