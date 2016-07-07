import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'tabs';

export default function TabsPanel(props) {
    return BEM(
        {
            block,
            elem: 'panel',
            mods: {
                ...props.mods,
                selected: props.selected === props.index
            },
            mix: props.mix
        },
        props.children
    );
}

TabsPanel.displayName = `core: ${block}/panel`;
TabsPanel.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.number
};
