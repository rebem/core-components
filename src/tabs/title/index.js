import { PropTypes } from 'react';
import { blockFactory } from 'rebem';

const block = blockFactory('tabs');

export default function TabsTitle(props) {
    return block(
        {
            ...props,
            elem: 'title',
            mods: {
                ...props.mods,
                selected: props.selected === props.index
            },
            onClick() {
                if ('onTabChange' in props) {
                    props.onTabChange(props.index);
                }
            }
        },
        block({ elem: 'title-inner' },
            props.children
        )
    );
}

TabsTitle.displayName = `core: ${block}/title`;
TabsTitle.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.number,
    onTabChange: PropTypes.func
};
