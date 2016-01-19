import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
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

            it('disabled', function() {
                this.component.setProps({ disabled: true });
                expect(this.component).to.have.mods({ disabled: true });
            });

            it('children', function() {
                this.component.setProps({
                    children: createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(this.component.find('.test-children')).to.be.block('test-children');
            });
        });
    });
});
