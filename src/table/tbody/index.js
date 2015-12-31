import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table/tbody';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

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
