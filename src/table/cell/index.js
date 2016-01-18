import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'cell',
            tag: 'td'
        },
        props.children
    );
}
