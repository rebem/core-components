import { BEM } from '@yummies/bem';

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
