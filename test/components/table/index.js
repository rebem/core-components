import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Table from '#table';

describe('Table', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Table).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(render(Table()))).to.be.true;
        });
    });
});
