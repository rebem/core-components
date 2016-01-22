import { PropTypes } from 'react';
import { blockFactory } from 'rebem';

import Option from '#select/option';

const block = blockFactory('select');

export default function Select({ mods, mix, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block(
            {
                ...props,
                elem: 'control',
                tag: 'select'
            },
            props.options.map(optionProps => {
                return Option({
                    ...optionProps,
                    key: optionProps.value
                });
            })
        ),
        props.children
    );
}

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    ).isRequired
};

Select.defaultProps = {
    options: []
};
