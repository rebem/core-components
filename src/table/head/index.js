import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'head',
            tag: 'thead'
        },
        props.children
    );
}
