import { PropTypes } from 'react';
import { BEM } from 'rebem';

export default function Option({ value, text }) {
    return BEM(
        {
            block: 'select',
            elem: 'option',
            tag: 'option',
            value
        },
        text
    );
}

Option.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
