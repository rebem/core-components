import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'button';

export default function Button(props) {
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
            type: 'button'
        }),
        props.children
    );
}

Button.defaultProps = {
    disabled: false
};

Button.propTypes = {
    disabled: PropTypes.bool
};
