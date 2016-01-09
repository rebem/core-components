import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: tabs/title';
    static propTypes = {
        title: PropTypes.node.isRequired,
        index: PropTypes.number.isRequired,
        selected: PropTypes.number,
        onTabChange: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

    constructor(props, context) {
        super(props, context);

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab() {
        if ('onTabChange' in this.props) {
            this.props.onTabChange(this.props.index);
        }
    }

    render() {
        return Yummies({
            block: 'tabs',
            elem: 'title',
            props: {
                ...this.props,
                onClick: this.selectTab
            },
            mods: {
                selected: this.props.selected === this.props.index,
                ...this.props.mods
            },
            mix: this.props.mix,
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
        });
    }
}
