import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'foot',
            tag: 'tfoot'
        },
        props.children
    );
}
