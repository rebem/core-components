import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Popup from '#popup';

describe('Popup', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Popup).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(Popup()))).to.be.true;
        });
    });
});
