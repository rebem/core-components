import { blockFactory } from 'rebem';

const block = blockFactory('attach');

export default function Attach(props) {
    return block({ tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'file'
        }),
        props.children
    );
}
