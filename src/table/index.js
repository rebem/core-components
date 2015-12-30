import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: Table';

    render() {
        return {
            block: 'table',
            tag: 'table',
            props: this.props,
            content: this.props.children
        };
    }
}
