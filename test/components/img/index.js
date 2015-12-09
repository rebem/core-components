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
        it('initial', function() {
            const rootComponent = renderOnce(Img());
            const rootComponentDOMNode = YummiesDOM.findDOMNode(rootComponent);

            expect(rootComponentDOMNode).to.be.a.block('img');
            expect(rootComponentDOMNode.tagName).to.be.equal('IMG');
        });
    });
});
