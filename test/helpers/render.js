import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'legit-tests/no-dom';

import * as middleware from 'test/helpers/middleware';

export function createRender(containerTag = 'div') {
    const dummy = document.createElement(containerTag);

    return function(instance) {
        return ReactDOM.render(instance, dummy);
    };
}

export function renderOnce(instance, containerTag) {
    return createRender(containerTag)(instance);
}

function createWrapper(Component, props) {
    class WrapperClass extends React.Component {
        constructor(...args) {
            super(...args);

            this.state = props;
        }

        render() {
            return Component(this.state);
        }
    }

    return React.createElement(WrapperClass);
}

export function render(Component, props) {
    return Test(createWrapper(Component, props)).mixin(middleware);
}
