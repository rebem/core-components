import { PropTypes } from 'react';
import { BEM } from 'rebem';

import Label from '#label-group/label';
import Control from '#label-group/control';

function renderChildren(props) {
    const label = Label({ labelText: props.labelText, key: 'label' });
    const control = Control({ key: 'control' }, props.children);

    if (props.controlPosition === 'right') {
        return [ label, control ];
    }

    return [ control, label ];
}

export default function LabelGroup({ mods, mix, ...props }) {
    return BEM(
        {
            ...props,
            block: 'label-group',
            mods: {
                ...mods,
                'control-position': props.controlPosition
            },
            mix,
            tag: 'label'
        },
        ...renderChildren(props)
    );
}

LabelGroup.propTypes = {
    controlPosition: PropTypes.oneOf([ 'left', 'right' ]),
    labelText: PropTypes.string
};

LabelGroup.defaultProps = {
    controlPosition: 'right'
};
