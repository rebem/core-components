import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: TableCell';

    render() {
        return {
            block: 'table',
            elem: 'cell',
            tag: 'td',
            props: this.props,
            content: this.props.children
        };
    }
}
