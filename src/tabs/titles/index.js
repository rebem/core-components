import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'tabs/titles';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]).isRequired
    };

    render() {
        return {
            block: 'tabs',
            elem: 'titles',
            content: this.props.children
        };
    }
}
