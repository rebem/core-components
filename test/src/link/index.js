import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Link from '#link';

describe('a', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Link).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Link())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(Link());

                expect(component).to.have.tagName('a');
                expect(component).to.be.a.block('link');
            });
        });
    });
});
