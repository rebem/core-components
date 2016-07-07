import { PropTypes } from 'react';
import { BEM } from 'rebem';

import Titles from '#tabs/titles';
import Title from '#tabs/title';
import Panels from '#tabs/panels';
import Panel from '#tabs/panel';

function renderTitles(props) {
    if ('renderTitles' in props) {
        return props.renderTitles(props);
    }

    return Titles(null,
        props.tabs.map((tab, index) => {
            return Title(
                {
                    index,
                    selected: props.selected,
                    onTabChange: props.onTabChange,
                    key: index
                },
                tab.title
            );
        })
    );
}

function renderPanels(props) {
    if ('renderPanels' in props) {
        return props.renderPanels(props);
    }

    return Panels(null,
        props.tabs.map((tab, index) => {
            return Panel(
                {
                    index,
                    selected: props.selected,
                    key: index
                },
                tab.content
            );
        })
    );
}

export default function Tabs({ mods, mix, ...props }) {
    return BEM(
        {
            mods,
            mix,
            block: 'tabs'
        },
        renderTitles(props),
        renderPanels(props)
    );
}

Tabs.propTypes = {
    renderPanels: PropTypes.func,
    renderTitles: PropTypes.func,
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
    onTabChange: PropTypes.func
};

Tabs.defaultProps = {
    selected: 0,
    tabs: []
};
