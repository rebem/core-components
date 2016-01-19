import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Table from '#table';

describe('table', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Table).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Table())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(Table());

                expect(component.type()).to.be.equal('table');
                expect(component).to.be.a.block('table');
            });
        });
    });
});
