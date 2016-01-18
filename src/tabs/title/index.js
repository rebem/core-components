import { PropTypes } from 'react';
import { BEM } from '@yummies/bem';

const block = 'tabs';

export default function TabsTitle(props) {
    return BEM(
        {
            props,
            block,
            elem: 'title',
            mods: {
                selected: props.selected === props.index,
                ...props.mods
            },
            onClick() {
                if ('onTabChange' in props) {
                    props.onTabChange(props.index);
                }
            }
        },
        BEM(
            {
                block,
                elem: 'title-inner'
            },
            props.title
        )
    );
}

TabsTitle.displayName = `core: ${block}/title`;
TabsTitle.propTypes = {
    title: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    selected: PropTypes.number,
    onTabChange: PropTypes.func
};
