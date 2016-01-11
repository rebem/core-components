import { Component } from 'react';
import BEM from '@yummies/bem';

export default class extends Component {
    static displayName = 'core: img';

    render() {
        return BEM({
            block: 'img',
            mods: this.props.mods,
            mix: this.props.mix,
            tag: 'img',
            props: this.props
        });
    }
}
