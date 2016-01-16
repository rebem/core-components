import { Component, PropTypes } from 'react';
import { BEM } from '@yummies/bem';

const block = 'tabs';

export default class extends Component {
    static displayName = `core: ${block}/title`;
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
        return BEM(
            {
                ...this.props,
                block,
                elem: 'title',
                onClick: this.selectTab,
                mods: {
                    selected: this.props.selected === this.props.index,
                    ...this.props.mods
                }
            },
            BEM(
                {
                    block,
                    elem: 'title-inner'
                },
                this.props.title
            )
        );
    }
}
