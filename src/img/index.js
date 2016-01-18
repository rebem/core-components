import { BEM } from '@yummies/bem';

export default function(props) {
    return BEM({
        ...props,
        block: 'img',
        tag: 'img'
    });
}
