import { PropTypes } from 'react';
import { BEM } from 'rebem';

const ESC_KEYCODE = 27;
const block = 'popup';

export default function Popup({ children, onHide, hideWithEsc, visible, onKeyUp, mods, ...props }) {
    return BEM(
        {
            ...props,
            block,
            mods: {
                ...mods,
                visible
            },
            ref(ref) {
                if (hideWithEsc && ref) {
                    if (visible) {
                        ref.focus();
                    } else {
                        ref.blur();
                    }
                }
            },
            onKeyUp(e) {
                if (hideWithEsc && e.keyCode === ESC_KEYCODE) {
                    onHide();
                }

                if (onKeyUp) {
                    onKeyUp(e);
                }
            }
        },
        BEM({
            block,
            elem: 'overlay',
            onClick: onHide
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
    hideWithEsc: PropTypes.bool,
    visible: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func
};

Popup.defaultProps = {
    visible: false,
    hideWithEsc: true,
    tabIndex: -1
};
