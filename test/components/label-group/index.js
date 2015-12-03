import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import LabelGroup from '#label-group';

describe('LabelGroup', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(LabelGroup).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(LabelGroup()))).to.be.true;
        });
    });
});
