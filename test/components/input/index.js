import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Input from '#input';

describe('Input', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Input).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(Input()))).to.be.true;
        });
    });
});
