import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table/tbody';
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
            elem: 'body',
            mods: this.props.mods,
            mix: this.props.mix,
            tag: 'tbody',
            props: this.props,
            content: this.props.children
        });
    }
}
