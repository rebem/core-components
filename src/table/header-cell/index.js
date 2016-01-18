import { BEM } from 'rebem';

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
