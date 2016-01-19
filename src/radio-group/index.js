import { Children, PropTypes, cloneElement } from 'react';
import { BEM } from 'rebem';

export default function RadioGroup(props) {
    return BEM({ block: 'radio-group' },
        Children.map(props.children, child => {
            return cloneElement(child, {
                checked: child.props.value === props.value,
                onChange: props.onChange.bind(this, child.props.value)
            });
        })
    );
}

RadioGroup.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
};
