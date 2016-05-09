import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'label-group',
            elem: 'label'
        },
        props.labelText
    );
}
