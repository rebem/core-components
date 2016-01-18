import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Link from '#link';

describe.skip('link', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Link).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Link()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Link(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
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
                    children: React.createElement('div', {
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
});
