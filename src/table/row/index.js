import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'row',
            tag: 'tr'
        },
        props.children
    );
}
