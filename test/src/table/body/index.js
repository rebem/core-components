import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableBody from '#table/body';

describe('table/body', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableBody).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableBody())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableBody());

                expect(component.type()).to.be.equal('tbody');
                expect(component).to.be.an.elem({ block: 'table', elem: 'body' });
            });
        });
    });
});
