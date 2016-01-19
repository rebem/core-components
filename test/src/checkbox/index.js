import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from '#checkbox';

describe('checkbox', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Checkbox).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Checkbox())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Checkbox());
            this.control = this.component.find('.checkbox__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'checkbox');
                expect(this.component).to.be.a.block('checkbox');
                expect(this.control).to.be.an.elem({
                    block: 'checkbox',
                    elem: 'control'
                });
            });

            it('props are transfered to "control"', function() {
                this.component.setProps({
                    'data-test': true
                });

                const control = this.component.find('.checkbox__control');

                expect(this.component).to.not.have.prop('data-test');
                expect(control).to.have.prop('data-test', true);
            });

            it('children', function() {
                const dummy = createElement('div');

                this.component.setProps({
                    children: dummy
                });

                expect(this.component.contains(dummy)).to.true;
            });
        });
    });
});
