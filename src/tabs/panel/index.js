import { Component, PropTypes } from 'react';
import BEM from '@yummies/bem';

export default class extends Component {
    static displayName = 'core: tabs/panel';
    static propTypes = {
        index: PropTypes.number.isRequired,
        selected: PropTypes.number,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

    render() {
        return BEM({
            block: 'tabs',
            elem: 'panel',
            mods: {
                selected: this.props.selected === this.props.index,
                ...this.props.mods
            },
            mix: this.props.mix,
            props: this.props,
            content: this.props.children
        });
    }
}
