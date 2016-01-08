import { Component, PropTypes } from '@yummies/yummies';
import Titles from '#tabs/titles';
import Title from '#tabs/title';

export default class extends Component {
    static displayName = 'core: tabs';
    static propTypes = {
        selected: (props, propName, componentName, ...rest) => {
            if (
                typeof props.selected !== 'number' ||
                props.selected < 0 ||
                (props.selected !== 0 && props.selected >= props.tabs.length)
            ) {
                return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected to be a tab index within given \`props.tabs\` range`);
            }
        },
        tabs: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.node,
                content: PropTypes.oneOfType([
                    PropTypes.node,
                    PropTypes.arrayOf(PropTypes.node),
                    PropTypes.object,
                    PropTypes.arrayOf(PropTypes.object)
                ])
            })
        ).isRequired,
        onTabChange: PropTypes.func,
        renderTitles: PropTypes.func
    };
    static defaultProps = {
        selected: 0,
        tabs: []
    };

    renderTitles() {
        if ('renderTitles' in this.props) {
            return this.props.renderTitles({ ...this.props, key: 'titles' });
        }

        return Titles(
            {
                ...this.props,
                key: 'titles'
            },
            this.props.tabs.map((tab, index) => {
                return Title({
                    title: tab.title,
                    index,
                    ...this.props,
                    key: index
                });
            })
        );
    }

    renderPanels() {
        return this.props.tabs.map((tab, index) => {
            return {
                elem: 'panel',
                props: {
                    key: 'panel' + index
                },
                mods: {
                    selected: this.props.selected === index
                },
                content: tab.content
            };
        });
    }

    render() {
        return {
            block: 'tabs',
            content: [
                this.renderTitles(),
                {
                    elem: 'panels',
                    props: {
                        key: 'panels'
                    },
                    content: this.renderPanels()
                }
            ]
        };
    }
}
