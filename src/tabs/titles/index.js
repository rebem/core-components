import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'tabs/titles';

    render() {
        return {
            block: 'tabs',
            elem: 'titles',
            content: this.props.children
        };
    }
}
