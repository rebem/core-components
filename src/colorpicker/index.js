import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'colorpicker';

export default function Colorpicker(props) {
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
            type: 'color'
        }),
        props.children
    );
}

Colorpicker.defaultProps = {
    disabled: false
};

Colorpicker.propTypes = {
    disabled: PropTypes.bool
};
