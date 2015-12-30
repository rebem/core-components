import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table/row';

    render() {
        return {
            block: 'table',
            elem: 'row',
            tag: 'tr',
            props: this.props,
            content: this.props.children
        };
    }
}
