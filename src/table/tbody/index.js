import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: TableBody';

    render() {
        return {
            block: 'table',
            elem: 'body',
            tag: 'tbody',
            props: this.props,
            content: this.props.children
        };
    }
}
