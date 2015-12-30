import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: TableHead';

    render() {
        return {
            block: 'table',
            elem: 'head',
            tag: 'thead',
            props: this.props,
            content: this.props.children
        };
    }
}
