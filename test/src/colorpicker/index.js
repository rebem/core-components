import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Colorpicker from '#colorpicker';

describe('colorpicker', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Colorpicker).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Colorpicker())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Colorpicker());
            this.control = this.component.find('.colorpicker__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'color');
                expect(this.component).to.be.a.block('colorpicker');
                expect(this.control).to.be.an.elem({
                    block: 'colorpicker',
                    elem: 'control'
                });
            });

            it('props are transfered to "control"', function() {
                this.component.setProps({
                    'data-test': true
                });

                const control = this.component.find('.colorpicker__control');

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
