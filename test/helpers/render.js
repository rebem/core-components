import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import Test from 'legit-tests/no-dom';

import * as middleware from 'test/helpers/middleware';

export function createRender(containerTag = 'div') {
    const dummy = document.createElement(containerTag);

    return function(instance) {
        return YummiesDOM.render(instance, dummy);
    };
}

export function renderOnce(instance, containerTag) {
    return createRender(containerTag)(instance);
}

function createWrapper(Component, props) {
    class WrapperClass extends Yummies.Component {
        constructor(...args) {
            super(...args);

            this.state = props;
        }

        render() {
            return Component(this.state);
        }
    }

    return Yummies.createElement(WrapperClass);
}

export function render(Component, props) {
    return Test(createWrapper(Component, props)).mixin(middleware);
}
