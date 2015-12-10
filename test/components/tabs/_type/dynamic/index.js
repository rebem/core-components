import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import TabsTypeDynamic from '#tabs?_type=dynamic';

describe('tabs', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(TabsTypeDynamic).to.exist;
        });

        it('is a component', () => {
            const Component = TabsTypeDynamic();

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });
});
