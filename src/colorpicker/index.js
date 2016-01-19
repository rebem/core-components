import { BEM } from 'rebem';

const block = 'colorpicker';

export default function Colorpicker(props) {
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
            type: 'color'
        }),
        props.children
    );
}
