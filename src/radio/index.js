import { BEM } from 'rebem';

const block = 'radio';

export default function Radio(props) {
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
            type: 'radio'
        }),
        props.children
    );
}
