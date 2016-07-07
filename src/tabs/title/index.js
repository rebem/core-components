import { PropTypes } from 'react';
import { blockFactory } from 'rebem';

const block = blockFactory('tabs');

export default function TabsTitle(props) {
    return block(
        {
            elem: 'title',
            mods: {
                ...props.mods,
                selected: props.selected === props.index
            },
            mix: props.mix,
            onClick() {
                if (props.onTabChange) {
                    props.onTabChange(props.index);
                }
            }
        },
        block({ elem: 'title-inner' },
            props.children
        )
    );
}

TabsTitle.displayName = 'core: tabs/title';
TabsTitle.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.number,
    onTabChange: PropTypes.func
};
