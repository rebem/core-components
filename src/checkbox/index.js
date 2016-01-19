import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'checkbox';

export default function Checkbox(props) {
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
            tag: 'input',
            type: 'checkbox'
        }),
        props.children
    );
}

Checkbox.defaultProps = {
    disabled: false,
    checked: false
};

Checkbox.propTypes = {
    disabled: PropTypes.bool
};
