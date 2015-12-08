import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Select from '#select';

describe('select', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Select).to.exist;
        });

        it('is a component', () => {
            const Component = Select({
                options: [
                    {
                        text: 'test',
                        value: 'test'
                    }
                ]
            });

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });
});
