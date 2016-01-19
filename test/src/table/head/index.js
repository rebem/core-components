import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableHead from '#table/head';

describe('table/head', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(TableHead).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(TableHead())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(TableHead());

                expect(component.type()).to.be.equal('thead');
                expect(component).to.be.an.elem({ block: 'table', elem: 'head' });
            });
        });
    });
});
