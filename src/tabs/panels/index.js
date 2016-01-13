import { Component, PropTypes } from 'react';
import BEM from '@yummies/bem';

export default class extends Component {
    static displayName = 'tabs/panels';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]).isRequired
    };

    render() {
        return BEM({
            block: 'tabs',
            elem: 'panels',
            mods: this.props.mods,
            mix: this.props.mix,
            props: this.props,
            content: this.props.children
        });
    }
}
