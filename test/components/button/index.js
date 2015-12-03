import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Button from '#button';

describe('Button', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Button).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(Button()))).to.be.true;
        });
    });
});
