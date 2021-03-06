import { PropTypes } from 'react';
import { BEM } from 'rebem';

import Label from '#field-group/label';
import Content from '#field-group/content';

function renderChildren(props) {
    const label = Label({ label: props.label, key: 'label' });
    const content = Content({ key: 'content' }, props.children);

    if (props.labelPosition === 'left') {
        return [ label, content ];
    }

    return [ content, label ];
}

export default function FieldGroup({ mods, mix, label, labelPosition, children, ...props }) {
    return BEM(
        {
            ...props,
            block: 'field-group',
            mods: {
                ...mods,
                'label-position': labelPosition
            },
            mix
        },
        ...renderChildren({ label, labelPosition, children })
    );
}

FieldGroup.propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf([ 'left', 'right' ])
};

FieldGroup.defaultProps = {
    labelPosition: 'left'
};
