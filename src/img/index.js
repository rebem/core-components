import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: img';

    render() {
        return {
            block: 'img',
            tag: 'img',
            props: this.props
        };
    }
}
