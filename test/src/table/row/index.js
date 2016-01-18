import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import { renderOnce } from 'test/helpers/render';

import TableRow from '#table/row';

describe.skip('table/tr', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(TableRow).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(TableRow(), 'tbody'))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(TableRow(props), 'tbody');
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {

            it('initial', function() {
                expect(this.rootComponentDOMNode.tagName).to.be.equal('TR');
                expect(this.rootComponentDOMNode).to.be.an.elem({
                    block: 'table',
                    elem: 'row'
                });
            });

            it('props', function() {
                const testAttr = 'test';

                this.renderWithProps({
                    'data-test-attr': testAttr
                });

                expect(this.rootComponentDOMNode.getAttribute('data-test-attr')).to.be.equal(testAttr);
            });

            it('children', function() {
                this.renderWithProps({
                    children: React.createElement('td', {
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
