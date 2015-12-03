import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Textarea from '#textarea';

describe('Textarea', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Textarea).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Textarea()))).to.be.true;
        });
    });
});
