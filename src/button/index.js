import { PropTypes } from 'react';
import { blockFactory } from 'rebem';

const block = blockFactory('button');

export default function Button({ mods, mix, children, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input'
        }),
        children
    );
}

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    type: PropTypes.oneOf([
        'button',
        'submit',
        'image',
        'reset'
    ])
};
