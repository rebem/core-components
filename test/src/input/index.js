import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Input from '#input';

describe('input', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Input).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Input())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Input());
            this.control = this.component.find('.input__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'text');
                expect(this.component).to.be.a.block('input');
                expect(this.control).to.be.an.elem({
                    block: 'input',
                    elem: 'control'
                });
            });

            it('props are transfered to "control"', function() {
                this.component.setProps({
                    'data-test': true
                });

                const control = this.component.find('.input__control');

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
