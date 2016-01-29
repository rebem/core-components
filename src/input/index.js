import { blockFactory } from 'rebem';

const block = blockFactory('input');

export default function Input({ mods, mix, children, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            type: 'text',       // type should be redefinable
            ...props,
            elem: 'control',
            tag: 'input'
        }),
        children
    );
}
