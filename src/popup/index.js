import { PropTypes } from 'react';
import { BEM } from 'rebem';

const ESC_KEYCODE = 27;
const block = 'popup';

export default function Popup({ children, ...props }) {
    return BEM(
        {
            ...props,
            block,
            mods: {
                ...props.mods,
                visible: props.visible
            },
            tabIndex: -1,
            ref(ref) {
                if (props.hideWithEsc && ref) {
                    if (props.visible) {
                        ref.focus();
                    } else {
                        ref.blur();
                    }
                }
            },
            onKeyUp(e) {
                if (props.hideWithEsc && e.keyCode === ESC_KEYCODE) {
                    props.onHide();
                }

                if (props.onKeyUp) {
                    props.onKeyUp(e);
                }
            }
        },
        BEM({
            block,
            elem: 'overlay'
        }),
        BEM(
            {
                block,
                elem: 'content'
            },
            children
        )
    );
}

Popup.propTypes = {
    visible: PropTypes.bool,
    hideWithEsc: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func
};

Popup.defaultProps = {
    visible: false,
    hideWithEsc: true
};
