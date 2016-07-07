import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            block: 'tabs',
            elem: 'panels',
            mix: props.mix,
            mods: props.mods
        },
        props.children
    );
}
