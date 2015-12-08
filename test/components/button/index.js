import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Button from '#button';

describe('button', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Button).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Button()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Button(props));
                this.inputControl = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'button__control');
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = YummiesDOM.findDOMNode(this.inputControl);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode.className).to.be.a.block('button');
                expect(this.inputControlDOMNode.className).to.be.an.elem({
                    block: 'button',
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

            it('pressed', function() {
                TestUtils.Simulate.mouseDown(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.have.mods({ pressed: true });

                TestUtils.Simulate.mouseUp(this.inputControlDOMNode);
                expect(this.rootComponentDOMNode).to.not.have.mods({ pressed: true });
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

        describe('callbacks', () => {
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

            it('onMouseDown', function() {
                const spy = chai.spy();

                this.renderWithProps({ onMouseDown: spy });
                TestUtils.Simulate.mouseDown(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;


                this.renderWithProps();
                TestUtils.Simulate.mouseDown(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });

            it('onMouseUp', function() {
                const spy = chai.spy();

                this.renderWithProps({ onMouseUp: spy });
                TestUtils.Simulate.mouseUp(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                TestUtils.Simulate.mouseUp(this.inputControlDOMNode);
                expect(spy).to.have.been.called.once;
            });
        });
    });
});
