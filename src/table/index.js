import { BEM } from '@yummies/bem';

export default function Table(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            tag: 'table'
        },
        props.children
    );
}
