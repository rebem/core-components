import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableCell from '#table/cell';

describe('table/cell', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableCell).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableCell())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableCell());

                expect(component).to.have.tagName('td');
                expect(component).to.be.an.elem({ block: 'table', elem: 'cell' });
            });
        });
    });
});
