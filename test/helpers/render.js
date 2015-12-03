import YummiesDOM from '@yummies/dom';

export function createRender() {
    const dummy = document.createElement('div');

    return function(instance) {
        return YummiesDOM.render(instance, dummy);
    };
}

export function renderOnce(instance) {
    return createRender()(instance);
}
