import { Component, PropTypes } from 'react';
import BEM from '@yummies/bem';

import Titles from '#tabs/titles';
import Title from '#tabs/title';
import Panels from '#tabs/panels';
import Panel from '#tabs/panel';

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
        renderTitles: PropTypes.func,
        renderPanels: PropTypes.func
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
        if ('renderPanels' in this.props) {
            return this.props.renderPanels({ ...this.props, key: 'panels' });
        }

        return Panels(
            {
                ...this.props,
                key: 'panels'
            },
            this.props.tabs.map((tab, index) => {
                return Panel({
                    index,
                    ...this.props,
                    key: index
                }, tab.content);
            })
        );
    }

    render() {
        return BEM({
            block: 'tabs',
            mods: this.props.mods,
            mix: this.props.mix,
            props: this.props,
            content: [
                this.renderTitles(),
                this.renderPanels()
            ]
        });
    }
}
