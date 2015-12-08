import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import LabelGroup from '#label-group';

describe('labelGroup', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(LabelGroup).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(LabelGroup()))).to.be.true;
        });
    });
});
