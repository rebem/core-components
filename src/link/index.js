import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: link';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

    render() {
        return {
            block: 'link',
            tag: 'a',
            props: this.props,
            content: this.props.children
        };
    }
}
