import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'tabs',
            elem: 'panel',
            mods: {
                selected: props.selected === props.index,
                ...props.mods
            }
        },
        props.children
    );
}
