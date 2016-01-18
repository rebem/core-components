import { BEM } from 'rebem';

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
