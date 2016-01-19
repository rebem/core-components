import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'input';

export default function Input(props) {
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
            type: 'text'
        }),
        props.children
    );
}

Input.defaultProps = {
    disabled: false
};

Input.propTypes = {
    disabled: PropTypes.bool
};
