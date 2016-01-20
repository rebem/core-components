import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'select';

function renderOptions(props) {
    return props.options.map(option => {
        return BEM(
            {
                tag: 'option',
                value: option.value,
                key: option.value
            },
            option.text
        );
    });
}

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
            renderOptions(props)
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
