import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'header-cell',
            tag: 'th'
        },
        props.children
    );
}
