import { Component } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: img';

    render() {
        return Yummies({
            block: 'img',
            mods: this.props.mods,
            mix: this.props.mix,
            tag: 'img',
            props: this.props
        });
    }
}
