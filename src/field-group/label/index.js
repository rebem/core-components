import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'field-group',
            elem: 'label',
            tag: 'label'
        },
        props.label
    );
}
