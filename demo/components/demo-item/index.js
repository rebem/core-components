import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

export default class extends Component {
    static displayName = 'DemoItem';
    static propTypes = {
        title: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]),
        description: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]),
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

    _renderDescription() {
        if ('description' in this.props) {
            return {
                elem: 'description',
                props: {
                    key: 'description'
                },
                content: this.props.description
            };
        }

        return null;
    }

    _renderTitle() {
        if ('title' in this.props) {
            return {
                elem: 'title',
                props: {
                    key: 'title'
                },
                content: this.props.title
            };
        }

        return null;
    }

    render() {
        return Yummies({
            block: 'demo-item',
            mods: this.props.mods,
            mix: this.props.mix,
            props: this.props,
            content: [
                this._renderTitle(),
                this._renderDescription(),
                {
                    elem: 'content',
                    props: {
                        key: 'content'
                    },
                    content: this.props.children
                }
            ]
        });
    }
}
