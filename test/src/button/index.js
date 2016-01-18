import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '#button';

describe('button', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Button).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Button())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Button());
            this.control = this.component.find('.button__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'button');
                expect(this.component).to.be.a.block('button');
                expect(this.control).to.be.an.elem({
                    block: 'button',
                    elem: 'control'
                });
            });

            it('hover', function() {
                this.control.simulate('mouseEnter');
                expect(this.component).to.have.mods({ hovered: true });

                this.control.simulate('mouseLeave');
                expect(this.component).to.not.have.mods({ hovered: true });
            });

            it('focus/blur', function() {
                this.control.simulate('focus');
                expect(this.component).to.have.mods({ focused: true });

                this.control.simulate('blur');
                expect(this.component).to.not.have.mods({ focused: true });
            });

            it('pressed', function() {
                this.control.simulate('mouseDown');
                expect(this.component).to.have.mods({ pressed: true });

                this.control.simulate('mouseUp');
                expect(this.component).to.not.have.mods({ pressed: true });
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

        describe('callbacks', function() {
            it('onFocus', function() {
                const spy = chai.spy();

                this.component.setProps({ onFocus: spy });
                this.control.simulate('focus');

                this.component.setProps({ onFocus: null });
                this.control.simulate('focus');

                expect(spy).to.have.been.called.once;
            });

            it('onBlur', function() {
                const spy = chai.spy();

                this.component.setProps({ onBlur: spy });
                this.control.simulate('blur');

                this.component.setProps({ onBlur: null });
                this.control.simulate('blur');

                expect(spy).to.have.been.called.once;
            });

            it('onMouseEnter', function() {
                const spy = chai.spy();

                this.component.setProps({ onMouseEnter: spy });
                this.control.simulate('mouseEnter');

                this.component.setProps({ onMouseEnter: null });
                this.control.simulate('mouseEnter');

                expect(spy).to.have.been.called.once;
            });

            it('onMouseLeave', function() {
                const spy = chai.spy();

                this.component.setProps({ onMouseLeave: spy });
                this.control.simulate('mouseLeave');

                this.component.setProps({ onMouseLeave: null });
                this.control.simulate('mouseLeave');

                expect(spy).to.have.been.called.once;
            });

            it('onMouseDown', function() {
                const spy = chai.spy();

                this.component.setProps({ onMouseDown: spy });
                this.control.simulate('mouseDown');

                this.component.setProps({ onMouseDown: null });
                this.control.simulate('mouseDown');

                expect(spy).to.have.been.called.once;
            });

            it('onMouseUp', function() {
                const spy = chai.spy();

                this.component.setProps({ onMouseUp: spy });
                this.control.simulate('mouseUp');

                this.component.setProps({ onMouseUp: null });
                this.control.simulate('mouseUp');

                expect(spy).to.have.been.called.once;
            });
        });
    });
});
