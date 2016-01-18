import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Attach from '#attach';

describe('attach', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Attach).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Attach())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Attach());
            this.control = this.component.find('.attach__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'file');
                expect(this.component).to.be.a.block('attach');
                expect(this.control).to.be.an.elem({
                    block: 'attach',
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

        describe('API', function() {
            it('val()', function() {
                expect(this.component.instance().val()).to.be.equal(null);
            });
        });

        describe('callbacks', function() {
            it('onChange', function() {
                const spy = chai.spy();

                this.component.setProps({
                    onChange(e) {
                        spy(e.target.value);
                    }
                });
                this.control.simulate('change', { target: { value: '' } });

                this.component.setProps({ onChange: null });
                this.control.simulate('change', { target: { value: '' } });

                expect(spy).to.have.been.called.once;
                expect(spy).to.have.been.called.with('');
            });

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
