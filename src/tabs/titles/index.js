import { BEM } from 'rebem';

export default function TabsTitles(props) {
    return BEM(
        {
            block: 'tabs',
            elem: 'titles'
        },
        props.children
    );
}

TabsTitles.displayName = 'core: tabs/titles';
