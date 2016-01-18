import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import { createRender, renderOnce } from 'test/helpers/render';

import Select from '#select';

describe.skip('select', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Select).to.exist;
        });

        it('is a component', () => {
            const Component = Select();

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Select(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'select__control');
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.inputControlDOMNode.tagName).to.be.equal('SELECT');
                expect(this.rootComponentDOMNode).to.be.a.block('select');
                expect(this.inputControlDOMNode).to.be.an.elem({
                    block: 'select',
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
                    children: React.createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(
                    TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'test-children')
                ).to.be.block('test-children');
            });

            it('options', function() {
                this.renderWithProps({
                    value: 'test2',
                    options: [
                        { text: 'test1', value: 'test1' },
                        { text: 'test2', value: 'test2' }
                    ]
                });

                const options = TestUtils.scryRenderedDOMComponentsWithTag(this.rootComponent, 'option');

                expect(options[0].selected).to.be.false;
                expect(options[1].selected).to.be.true;
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
                let component = render(Select({ value: 'test' }));

                expect(component.state.value).to.be.equal('test');

                component = render(Select({ value: 'test2' }));

                expect(component.state.value).to.be.equal('test2');

                component = render(Select({ value: 'test2' }));

                expect(component.state.value).to.be.equal('test2');
            });
        });

        describe('propTypes', function() {
            it('throws error if incorrect value', function() {
                const incorrectRender = () => {
                    this.renderWithProps({
                        value: 'test',
                        options: [
                            { text: 'test1', value: 'test1' },
                            { text: 'test2', value: 'test2' }
                        ]
                    });
                };

                expect(incorrectRender).to.throw(Error);
            });
        });
    });
});
