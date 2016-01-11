import { Component, PropTypes } from 'react';
import BEM from '@yummies/bem';

export default class extends Component {
    static displayName = 'demo: demo-item';
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
        return BEM({
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
