import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import TableTd from '#table/td';

describe('table/td', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(TableTd).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(TableTd(), 'tr'))).to.be.true;
        });
    });

    describe('DOM', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(TableTd(props), 'tr');
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        it('initial', function() {
            expect(this.rootComponentDOMNode).to.be.an.elem({
                block: 'table',
                elem: 'cell'
            });
            expect(this.rootComponentDOMNode.tagName).to.be.equal('TD');
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
