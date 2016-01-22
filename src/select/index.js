import { PropTypes } from 'react';
import { BEM } from 'rebem';

import Option from '#select/option';

const block = 'select';

export default function Select(props) {
    return BEM(
        {
            block,
            tag: 'label'
        },
        BEM(
            {
                ...props,
                block,
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
