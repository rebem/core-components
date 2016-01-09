import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table/thead';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

    render() {
        return Yummies({
            block: 'table',
            elem: 'head',
            mods: this.props.mods,
            mix: this.props.mix,
            tag: 'thead',
            props: this.props,
            content: this.props.children
        });
    }
}
