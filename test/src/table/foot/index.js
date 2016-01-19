import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableFoot from '#table/foot';

describe('table/foot', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableFoot).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableFoot())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableFoot());

                expect(component).to.have.tagName('tfoot');
                expect(component).to.be.an.elem({ block: 'table', elem: 'foot' });
            });
        });
    });
});
