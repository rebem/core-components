import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import { renderOnce } from 'test/helpers/render';

import Popup from '#popup';

describe('popup', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Popup).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Popup()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Popup(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.switcherDOMNode = this.rootComponentDOMNode.children[0];
                this.wrapperDOMNode = this.rootComponentDOMNode.children[1];
                this.overlayDOMNode = this.wrapperDOMNode.children[0];
                this.innerDOMNode = this.wrapperDOMNode.children[1];
                this.contentDOMNode = this.innerDOMNode.children[0];
                this.popupID = this.switcherDOMNode.id;
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode).to.be.a.block('popup');

                expect(this.switcherDOMNode.tagName).to.be.equal('INPUT');
                expect(this.switcherDOMNode.type).to.be.equal('checkbox');
                expect(this.switcherDOMNode).to.be.an.elem({
                    block: 'popup',
                    elem: 'switcher'
                });

                expect(this.wrapperDOMNode).to.be.an.elem({
                    block: 'popup',
                    elem: 'wrapper'
                });

                expect(this.overlayDOMNode.tagName).to.be.equal('LABEL');
                expect(this.overlayDOMNode.getAttribute('for')).to.be.equal(this.popupID);
                expect(this.overlayDOMNode).to.be.an.elem({
                    block: 'popup',
                    elem: 'overlay'
                });

                expect(this.innerDOMNode).to.be.an.elem({
                    block: 'popup',
                    elem: 'inner'
                });

                expect(this.contentDOMNode).to.be.an.elem({
                    block: 'popup',
                    elem: 'content'
                });
            });

            it('children', function() {
                this.renderWithProps({
                    children: React.createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(this.contentDOMNode.children[0]).to.be.a.block('test-children');
            });
        });

        describe('API', () => {
            it('show', function() {
                this.renderWithProps();

                this.rootComponent.show();

                expect(this.rootComponent.state.visibility).to.be.true;
            });

            it('hide', function() {
                this.renderWithProps();

                this.rootComponent.show();
                this.rootComponent.hide();

                expect(this.rootComponent.state.visibility).to.be.false;
            });

            it('hide with Escape', function() {
                const spy = chai.spy();

                this.renderWithProps({ onHide: spy });

                this.rootComponent.show();

                TestUtils.Simulate.keyUp(this.rootComponentDOMNode, {
                    key: 'Escape',
                    keyCode: 27,
                    which: 27
                });

                TestUtils.Simulate.keyUp(this.rootComponentDOMNode, {
                    key: 'Enter',
                    keyCode: 13,
                    which: 13
                });

                expect(spy).to.have.been.called.once;
            });

            it('hide with outside click', function() {
                const spy = chai.spy();

                this.renderWithProps({ onHide: spy });

                this.rootComponent.show();

                TestUtils.Simulate.change(this.switcherDOMNode, { target: { checked: false } });

                expect(spy).to.have.been.called.once;

                TestUtils.Simulate.change(this.switcherDOMNode, { target: { checked: true } });

                expect(spy).to.have.been.called.once;
            });
        });

        describe('callbacks', () => {
            it('onShow', function() {
                const spy = chai.spy();

                this.renderWithProps({ onShow: spy });
                this.rootComponent.show();
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                this.rootComponent.show();
                expect(spy).to.have.been.called.once;
            });

            it('onHide', function() {
                const spy = chai.spy();

                this.renderWithProps({ onHide: spy });
                this.rootComponent.show();
                this.rootComponent.hide();
                expect(spy).to.have.been.called.once;

                this.renderWithProps();
                this.rootComponent.show();
                this.rootComponent.hide();
                expect(spy).to.have.been.called.once;
            });
        });
    });
});
