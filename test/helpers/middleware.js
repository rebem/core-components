import ReactDOM from 'react-dom';
import {
    scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

export function setProps(props) {
    this.instance.setState(props);
}

export function extractRootDOMNode() {
    this.elements.rootDOMNode = ReactDOM.findDOMNode(this.instance);
}

export function findClass(className) {
    const elements = scryRenderedDOMComponentsWithClass(this.instance, className);

    if (Array.isArray(elements) && elements.length === 1) {
        this.elements.result = elements[0];
    } else {
        this.elements.result = elements;
    }
}

export function findTag(tag) {
    const elements = scryRenderedDOMComponentsWithTag(this.instance, tag);

    if (Array.isArray(elements) && elements.length === 1) {
        this.elements[tag] = elements[0];
    } else {
        this.elements[tag] = elements;
    }
}
