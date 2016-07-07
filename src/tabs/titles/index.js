import { BEM } from 'rebem';

export default function TabsTitles(props) {
    return BEM(
        {
            block: 'tabs',
            elem: 'titles',
            mix: props.mix,
            mods: props.mods
        },
        props.children
    );
}

TabsTitles.displayName = 'core: tabs/titles';
