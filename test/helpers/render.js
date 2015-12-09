import YummiesDOM from '@yummies/dom';

export function createRender(containerTag = 'div') {
    const dummy = document.createElement(containerTag);

    return function(instance) {
        return YummiesDOM.render(instance, dummy);
    };
}

export function renderOnce(instance, containerTag) {
    return createRender(containerTag)(instance);
}
