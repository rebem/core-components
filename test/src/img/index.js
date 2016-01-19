import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Img from '#img';

describe('img', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Img).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Img())).to.be.true;
        });
    });

    describe('render', function() {
        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(Img());

                expect(component).to.have.tagName('img');
                expect(component).to.be.a.block('img');
            });
        });
    });
});
