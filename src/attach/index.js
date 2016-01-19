import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'attach';

export default function Attach(props) {
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
            type: 'file'
        }),
        props.children
    );
}

Attach.defaultProps = {
    disabled: false
};

Attach.propTypes = {
    disabled: PropTypes.bool
};
