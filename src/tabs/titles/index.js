import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'tabs/titles';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]).isRequired
    };

    render() {
        return Yummies({
            block: 'tabs',
            elem: 'titles',
            mods: this.props.mods,
            mix: this.props.mix,
            props: this.props,
            content: this.props.children
        });
    }
}
