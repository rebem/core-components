import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'tabs',
            elem: 'titles'
        },
        props.children
    );
}
