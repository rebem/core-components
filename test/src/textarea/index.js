import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import { createRender, renderOnce } from 'test/helpers/render';

import Textarea from '#textarea';

describe.skip('textarea', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Textarea).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Textarea()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Textarea(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'textarea__control');
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.inputControlDOMNode.tagName).to.be.equal('TEXTAREA');
                expect(this.rootComponentDOMNode).to.be.a.block('textarea');
                expect(this.inputControlDOMNode).to.be.an.elem({
                    block: 'textarea',
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

            it('value change', function() {
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: 'test' } });
                expect(this.inputControlDOMNode.value).to.be.equal('test');
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

        describe('API', () => {
            it('val()', function() {
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: 'test' } });
                expect(this.rootComponent.val()).to.be.equal('test');
            });
        });

        describe('callbacks', () => {
            it('onChange', function() {
                const spy = chai.spy();

                this.renderWithProps({
                    onChange(e) {
                        spy(e.target.value);
                    }
                });
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: 'test' } });
                expect(spy).to.have.been.called.with('test');

                this.renderWithProps();
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: 'test' } });
                expect(spy).to.have.been.called.with('test');
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
            it('value', function() {
                const render = createRender();
                let component = render(Textarea({ value: 'test' }));

                expect(component.state.value).to.be.equal('test');

                component = render(Textarea({ value: 'test2' }));

                expect(component.state.value).to.be.equal('test2');

                component = render(Textarea({ value: 'test2' }));

                expect(component.state.value).to.be.equal('test2');
            });
        });
    });
});
