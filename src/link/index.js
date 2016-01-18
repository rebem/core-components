import { BEM } from 'rebem';

export default function(props) {
    return BEM({
        ...props,
        block: 'link',
        tag: 'a'
    });
}
