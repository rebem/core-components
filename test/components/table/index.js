import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Table from '#table';

describe('table', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Table).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Table()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Table(props));
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode.tagName).to.be.equal('TABLE');
                expect(this.rootComponentDOMNode).to.be.a.block('table');
            });

            it('props', function() {
                const testCellpadding = 5;

                this.renderWithProps({
                    cellPadding: testCellpadding
                });

                expect(this.rootComponentDOMNode.cellPadding).to.be.equal(String(testCellpadding));
            });

            it('children', function() {
                this.renderWithProps({
                    children: Yummies.createElement('tbody', {
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
