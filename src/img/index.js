import { Component } from 'react';
import { BEM } from '@yummies/bem';

export default class extends Component {
    static displayName = 'core: img';

    render() {
        return BEM({
            ...this.props,
            block: 'img',
            tag: 'img'
        });
    }
}
