import { blockFactory } from 'rebem';

const block = blockFactory('colorpicker');

export default function Colorpicker({ mods, mix, children, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'color'
        }),
        children
    );
}
