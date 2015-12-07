import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { createRender, renderOnce } from 'test/helpers/render';

import Checkbox from '#checkbox';

describe('Checkbox', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Checkbox).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Checkbox()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Checkbox(props));
                this.inputControl = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'checkbox__control');
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = YummiesDOM.findDOMNode(this.inputControl);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode.className).to.be.a.block('checkbox');
                expect(this.inputControlDOMNode.className).to.be.an.elem({
                    block: 'checkbox',
                    elem: 'control'
                });
            });

            it('hover', function() {
                TestUtils.Simulate.mouseEnter(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.have.mods({ hovered: true });

                TestUtils.Simulate.mouseLeave(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.not.have.mods({ hovered: true });
            });

            it('focus/blur', function() {
                TestUtils.Simulate.focus(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.have.mods({ focused: true });

                TestUtils.Simulate.blur(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.not.have.mods({ focused: true });
            });

            it('disabled', function() {
                this.renderWithProps({ disabled: true });
                expect(this.rootComponentDOMNode).to.have.mods({ disabled: true });
            });

            it('children', function() {
                this.renderWithProps({
                    children: Yummies.createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(
                    TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'test-children')
                ).to.be.block('test-children');
            });
        });

        describe('API', () => {
            it('val()', function() {
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { checked: true } });
                expect(this.rootComponent.val()).to.be.true;
            });
        });

        describe('callbacks', () => {
            it('onChange', function() {
                const spy = chai.spy();

                this.renderWithProps({
                    onChange(e) {
                        spy(e.target.checked);
                    }
                });
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { checked: true } });
                expect(spy).to.have.been.called.with(true);

                this.renderWithProps();
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { checked: true } });
                expect(spy).to.have.been.called.with(true);
            });

            it('onFocus', function() {
                const spy = chai.spy();

                this.renderWithProps({ onFocus: spy });
                TestUtils.Simulate.focus(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                TestUtils.Simulate.focus(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });

            it('onBlur', function() {
                const spy = chai.spy();

                this.renderWithProps({ onBlur: spy });
                TestUtils.Simulate.blur(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                TestUtils.Simulate.blur(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });

            it('onMouseEnter', function() {
                const spy = chai.spy();

                this.renderWithProps({ onMouseEnter: spy });
                TestUtils.Simulate.mouseEnter(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                TestUtils.Simulate.mouseEnter(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });

            it('onMouseLeave', function() {
                const spy = chai.spy();

                this.renderWithProps({ onMouseLeave: spy });
                TestUtils.Simulate.mouseLeave(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                TestUtils.Simulate.mouseLeave(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });
        });

        describe('componentWillReceiveProps', () => {
            it('checked', function() {
                const render = createRender();
                let component = render(Checkbox({ checked: true }));

                expect(component.state.checked).to.be.equal(true);

                component = render(Checkbox({ checked: false }));

                expect(component.state.checked).to.be.equal(false);

                component = render(Checkbox({ checked: false }));

                expect(component.state.checked).to.be.equal(false);
            });
        });
    });
});
