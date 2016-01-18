import { BEM } from 'rebem';

export default function(props) {
    return BEM({
        ...props,
        block: 'img',
        tag: 'img'
    });
}
