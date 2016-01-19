import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableRow from '#table/row';

describe('table/row', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableRow).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableRow())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableRow());

                expect(component).to.have.tagName('tr');
                expect(component).to.be.an.elem({ block: 'table', elem: 'row' });
            });
        });
    });
});
