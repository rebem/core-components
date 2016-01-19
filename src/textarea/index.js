import { BEM } from 'rebem';

const block = 'textarea';

export default function Textarea(props) {
    return BEM(
        {
            block,
            tag: 'label'
        },
        BEM({
            ...props,
            block,
            elem: 'control',
            tag: 'textarea'
        }),
        props.children
    );
}
