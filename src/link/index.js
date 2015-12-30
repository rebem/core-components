import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: link';

    render() {
        return {
            block: 'link',
            tag: 'a',
            props: this.props,
            content: this.props.children
        };
    }
}
