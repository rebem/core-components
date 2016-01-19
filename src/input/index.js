import { BEM } from 'rebem';

const block = 'input';

export default function Input(props) {
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
            type: 'text'
        }),
        props.children
    );
}
