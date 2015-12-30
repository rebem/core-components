import { Component } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'DemoItem';

    _renderDescription() {
        if ('_description' in this.props) {
            return {
                elem: 'description',
                props: {
                    key: 'description'
                },
                content: this.props._description
            };
        }

        return null;
    }

    _renderTitle() {
        if ('_title' in this.props) {
            return {
                elem: 'title',
                props: {
                    key: 'title'
                },
                content: this.props._title
            };
        }

        return null;
    }

    render() {
        return {
            block: 'demo-item',
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
        };
    }
}
