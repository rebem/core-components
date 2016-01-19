import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'textarea';

export default function Textarea(props) {
    return BEM(
        {
            block,
            tag: 'label',
            mods: {
                disabled: props.disabled,
                ...props.mods
            }
        },
        BEM({
            ...props,
            block,
            elem: 'control',
            tag: 'textarea'
        }),
        props.children
    );
}

Textarea.defaultProps = {
    disabled: false
};

Textarea.propTypes = {
    disabled: PropTypes.bool
};
