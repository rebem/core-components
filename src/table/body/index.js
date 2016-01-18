import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'table',
            elem: 'body',
            tag: 'tbody'
        },
        props.children
    );
}
