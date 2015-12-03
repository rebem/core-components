import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Colorpicker from '#colorpicker';

describe('Colorpicker', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Colorpicker).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Colorpicker()))).to.be.true;
        });
    });
});
