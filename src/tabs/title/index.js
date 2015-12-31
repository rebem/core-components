import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: tabs/title';
    static propTypes = {
        title: PropTypes.node.isRequired,
        index: PropTypes.number.isRequired,
        selected: PropTypes.number,
        onTabChange: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

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
