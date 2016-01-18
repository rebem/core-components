import { PropTypes } from 'react';
import { BEM } from '@yummies/bem';

import Titles from '#tabs/titles';
import Title from '#tabs/title';
import Panels from '#tabs/panels';
import Panel from '#tabs/panel';

function renderTitles(props) {
    if ('renderTitles' in props) {
        return props.renderTitles({ ...props, key: 'titles' });
    }

    return Titles(
        props,
        props.tabs.map((tab, index) => {
            return Title({
                title: tab.title,
                index,
                ...props,
                key: index
            });
        })
    );
}

function renderPanels(props) {
    if ('renderPanels' in props) {
        return props.renderPanels({ ...props, key: 'panels' });
    }

    return Panels(
        props,
        props.tabs.map((tab, index) => {
            return Panel(
                {
                    index,
                    ...props,
                    key: index
                },
                tab.content
            );
        })
    );
}

export default function Tabs(props) {
    return BEM(
        {
            ...props,
            block: 'tabs'
        },
        renderTitles(props),
        renderPanels(props)
    );
}

Tabs.propTypes = {
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

Tabs.defaultProps = {
    selected: 0,
    tabs: []
};
