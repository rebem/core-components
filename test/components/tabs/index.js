import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

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

            expect(TestUtils.isCompositeComponent(render(Component))).to.be.true;
        });
    });
});
