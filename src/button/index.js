import { BEM } from 'rebem';

const block = 'button';

export default function Button(props) {
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
            type: 'button'
        }),
        props.children
    );
}
