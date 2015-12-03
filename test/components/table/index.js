import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Table from '#table';

describe('Table', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Table).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Table()))).to.be.true;
        });
    });
});
