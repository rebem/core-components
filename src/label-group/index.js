import { Component, PropTypes } from 'react';
import { BEM } from 'rebem';

import Label from '#label-group/label';
import Control from '#label-group/control';

function renderChildren(props) {
    const label = Label({ ...props, key: 'label' });
    const control = Control({ ...props, key: 'control' });

    if (props.controlPosition === 'right') {
        return [ label, control ];
    }

    return [ control, label ];
}

export default function LabelGroup(props) {
    return BEM(
        {
            ...props,
            block: 'label-group',
            mods: {
                'control-position': props.controlPosition,
                ...props.mods
            },
            tag: 'label'
        },
        renderChildren(props)
    );
}

LabelGroup.propTypes = {
    controlPosition: PropTypes.oneOf([ 'left', 'right' ]),
    labelText: PropTypes.string
};

LabelGroup.defaultProps = {
    controlPosition: 'right'
};
