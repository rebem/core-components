import { blockFactory } from 'rebem';

const block = blockFactory('attach');

export default function Attach({ mods, mix, children, label, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'file'
        }),
        block({ elem: 'label' }, label),
        children
    );
}
