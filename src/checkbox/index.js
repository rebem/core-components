import { BEM } from 'rebem';

const block = 'checkbox';

export default function Checkbox(props) {
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
            type: 'checkbox'
        }),
        props.children
    );
}
