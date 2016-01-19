import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableHeaderCell from '#table/header-cell';

describe('table/header-cell', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableHeaderCell).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableHeaderCell())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableHeaderCell());

                expect(component.type()).to.be.equal('th');
                expect(component).to.be.an.elem({ block: 'table', elem: 'header-cell' });
            });
        });
    });
});
