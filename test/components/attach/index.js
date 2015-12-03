import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Attach from '#attach';

describe('Attach', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Attach).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Attach()))).to.be.true;
        });
    });
});
