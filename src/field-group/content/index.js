import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'field-group',
            elem: 'content'
        },
        props.children
    );
}
