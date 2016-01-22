import { blockFactory } from 'rebem';

const block = blockFactory('checkbox');

export default function Checkbox({ mods, mix, children, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'checkbox'
        }),
        children
    );
}
