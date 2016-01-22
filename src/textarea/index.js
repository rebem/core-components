import { blockFactory } from 'rebem';

const block = blockFactory('textarea');

export default function Textarea({ mods, mix, children, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'textarea'
        }),
        children
    );
}
