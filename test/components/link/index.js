import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Link from '#link';

describe('link', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Link).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Link()))).to.be.true;
        });
    });

    describe('DOM', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Link(props));
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        it('initial', function() {
            expect(this.rootComponentDOMNode.tagName).to.be.equal('A');
            expect(this.rootComponentDOMNode).to.be.a.block('link');
        });

        it('props', function() {
            this.renderWithProps({
                href: '#test'
            });

            expect(this.rootComponentDOMNode.href).to.be.equal(location.href + '#test');
        });

        it('children', function() {
            this.renderWithProps({
                children: Yummies.createElement('div', {
                    key: 'test',
                    className: 'test-children'
                })
            });

            expect(
                TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'test-children')
            ).to.be.block('test-children');
        });
    });
});
