import Yummies from '@yummies/yummies';
import YummiesDOM from '@yummies/dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { createRender, renderOnce } from 'test/helpers/render';

import Colorpicker from '#colorpicker';

describe('colorpicker', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Colorpicker).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Colorpicker()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Colorpicker(props));
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'colorpicker__control');
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.inputControlDOMNode.tagName).to.be.equal('INPUT');
                expect(this.inputControlDOMNode.type).to.be.equal('color');
                expect(this.rootComponentDOMNode).to.be.a.block('colorpicker');
                expect(this.inputControlDOMNode).to.be.an.elem({
                    block: 'colorpicker',
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
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: '#ff0000' } });
                expect(this.inputControlDOMNode.value).to.be.equal('#ff0000');
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
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: '#ff0000' } });
                expect(this.rootComponent.val()).to.be.equal('#ff0000');
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
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: '#ff0000' } });
                expect(spy).to.have.been.called.with('#ff0000');

                this.renderWithProps();
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: '#ff0000' } });
                expect(spy).to.have.been.called.with('#ff0000');
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
                let component = render(Colorpicker({ value: '#ff0000' }));

                expect(component.state.value).to.be.equal('#ff0000');

                component = render(Colorpicker({ value: '#00ff00' }));

                expect(component.state.value).to.be.equal('#00ff00');

                component = render(Colorpicker({ value: '#00ff00' }));

                expect(component.state.value).to.be.equal('#00ff00');
            });
        });
    });
});
