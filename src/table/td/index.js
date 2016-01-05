import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table/td';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

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
