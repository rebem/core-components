import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Img from '#img';

describe('Img', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Img).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Img()))).to.be.true;
        });
    });
});
