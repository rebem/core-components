import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Select from '#select';

describe('select', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Select).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Select())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Select());
            this.control = this.component.find('.select__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('select');
                expect(this.component).to.be.a.block('select');
                expect(this.control).to.be.an.elem({
                    block: 'select',
                    elem: 'control'
                });
            });

            it('props are transfered to "control"', function() {
                this.component.setProps({
                    'data-test': true
                });

                const control = this.component.find('.select__control');

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

            it('options', function() {
                this.component.setProps({
                    options: [
                        { value: 'option1', text: 'option 1' },
                        { value: 'option2', text: 'option 2' }
                    ]
                });

                const options = this.component.find('option');

                expect(options).to.have.length(2);
                expect(options.at(0)).to.have.attr('value', 'option1');
                expect(options.at(0)).to.have.text('option 1');
                expect(options.at(1)).to.have.attr('value', 'option2');
                expect(options.at(1)).to.have.text('option 2');
            });
        });
    });
});
