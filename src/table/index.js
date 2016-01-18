import { BEM } from 'rebem';

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
