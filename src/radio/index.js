import { blockFactory } from 'rebem';

const block = blockFactory('radio');

export default function Radio({ mods, mix, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'radio'
        }),
        props.children
    );
}
