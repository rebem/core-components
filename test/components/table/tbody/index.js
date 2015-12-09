import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import TableTbody from '#table/tbody';

describe('table/tbody', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(TableTbody).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(TableTbody(), 'table'))).to.be.true;
        });
    });

    describe('DOM', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(TableTbody(props), 'table');
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        it('initial', function() {
            expect(this.rootComponentDOMNode).to.be.an.elem({
                block: 'table',
                elem: 'body'
            });
            expect(this.rootComponentDOMNode.tagName).to.be.equal('TBODY');
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
                children: Yummies.createElement('tr', {
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
