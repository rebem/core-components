import TestUtils from 'react-addons-test-utils';
import YummiesDOM from '@yummies/dom';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Img from '#img';

describe('img', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Img).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Img()))).to.be.true;
        });
    });

    describe('DOM', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Img(props));
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        it('initial', function() {
            expect(this.rootComponentDOMNode).to.be.a.block('img');
            expect(this.rootComponentDOMNode.tagName).to.be.equal('IMG');
        });

        it('props', function() {
            const testWidth = 200;

            this.renderWithProps({
                width: testWidth
            });

            expect(this.rootComponentDOMNode.width).to.be.equal(testWidth);
        });
    });
});
