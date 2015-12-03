import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Tabs from '#tabs';

describe('Tabs', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Tabs).to.exist;
        });

        it('is a component', () => {
            const Component = Tabs({
                tabs: [
                    {
                        title: 'test'
                    }
                ]
            });

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });
});
