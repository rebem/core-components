import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import { createRender, renderOnce } from 'test/helpers/render';

import Radio from '#radio';

describe.skip('radio', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Radio).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Radio()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Radio(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'radio__control');
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.inputControlDOMNode.tagName).to.be.equal('INPUT');
                expect(this.inputControlDOMNode.type).to.be.equal('radio');
                expect(this.rootComponentDOMNode).to.be.a.block('radio');
                expect(this.inputControlDOMNode).to.be.an.elem({
                    block: 'radio',
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

            it('radio group', function() {
                const radio1 = renderOnce(Radio({ name: 'group1' }));
                const radio1DOMNode = ReactDOM.findDOMNode(radio1);
                const radio1InputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(radio1, 'radio__control');

                const radio2 = renderOnce(Radio({ name: 'group1', checked: true }));
                const radio2DOMNode = ReactDOM.findDOMNode(radio2);

                expect(radio1DOMNode).to.not.has.mods({ checked: true });
                expect(radio2DOMNode).to.has.mods({ checked: true });

                TestUtils.Simulate.change(radio1InputControlDOMNode, { target: { checked: true } });

                expect(radio1DOMNode).to.has.mods({ checked: true });
                expect(radio2DOMNode).to.not.has.mods({ checked: true });
            });

            it('children', function() {
                this.renderWithProps({
                    children: React.createElement('div', {
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
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { cheked: true } });
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
                let component = render(Radio({ checked: false }));

                expect(component.state.checked).to.be.equal(false);

                component = render(Radio({ checked: true }));

                expect(component.state.checked).to.be.equal(true);

                component = render(Radio({ checked: true }));

                expect(component.state.checked).to.be.equal(true);
            });
        });

        describe('componentWillUnmount', () => {
            it('remove radio from existing group', function() {
                const radio1 = renderOnce(Radio({ name: 'group2' }));
                const radio1DOMNode = ReactDOM.findDOMNode(radio1);
                const radio1InputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(radio1, 'radio__control');

                const radio2 = renderOnce(Radio({ name: 'group2', checked: true }));
                const radio2DOMNode = ReactDOM.findDOMNode(radio2);

                ReactDOM.unmountComponentAtNode(radio2DOMNode.parentNode);
                TestUtils.Simulate.change(radio1InputControlDOMNode, { target: { checked: true } });

                expect(radio1DOMNode).to.has.mods({ checked: true });
                expect(radio2DOMNode).to.has.mods({ checked: true });
            });
        });
    });
});
