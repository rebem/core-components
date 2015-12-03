import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Link from '#link';

describe('Link', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Link).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Link()))).to.be.true;
        });
    });
});
