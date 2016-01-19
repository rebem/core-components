import { BEM } from 'rebem';

const block = 'attach';

export default function Attach(props) {
    return BEM(
        {
            block,
            tag: 'label'
        },
        BEM({
            ...props,
            block,
            elem: 'control',
            tag: 'input',
            type: 'file'
        }),
        props.children
    );
}
