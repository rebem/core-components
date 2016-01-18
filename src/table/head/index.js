import { BEM } from 'rebem';

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
