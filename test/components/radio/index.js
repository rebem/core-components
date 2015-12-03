import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Radio from '#radio';

describe('Radio', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Radio).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Radio()))).to.be.true;
        });
    });
});
