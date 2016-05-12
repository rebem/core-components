import { PropTypes } from 'react';
import { BEM } from 'rebem';

import Text from '#label/text';
import Control from '#label/control';

function renderChildren(props) {
    const text = Text({ text: props.text, key: 'text' });
    const control = Control({ key: 'control' }, props.children);

    if (props.textPosition === 'left') {
        return [ text, control ];
    }

    return [ control, text ];
}

export default function Label({ mods, mix, text, textPosition, children, ...props }) {
    return BEM(
        {
            ...props,
            block: 'label',
            mods: {
                ...mods,
                'text-position': textPosition
            },
            mix,
            tag: 'label'
        },
        ...renderChildren({ text, textPosition, children })
    );
}

Label.propTypes = {
    text: PropTypes.string,
    textPosition: PropTypes.oneOf([ 'left', 'right' ])
};

Label.defaultProps = {
    textPosition: 'left'
};
