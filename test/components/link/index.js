import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Link from '#link';

describe('Link', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Link).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(Link()))).to.be.true;
        });
    });
});
