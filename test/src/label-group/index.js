import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import LabelGroup from '#label-group';

describe('labelGroup', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(LabelGroup).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(LabelGroup()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(LabelGroup(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
            };
        });

        describe('DOM', () => {
            it('initial', function() {
                this.renderWithProps({
                    labelText: 'test label',
                    children: React.createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                const labelDOMNode = this.rootComponentDOMNode.children[0];
                const controlDOMNode = this.rootComponentDOMNode.children[1];

                expect(this.rootComponentDOMNode.tagName).to.be.equal('LABEL');
                expect(this.rootComponentDOMNode).to.be.a.block('label-group');
                expect(this.rootComponentDOMNode).to.has.mods({
                    'control-position': 'right'
                });

                expect(labelDOMNode).to.be.an.elem({
                    block: 'label-group',
                    elem: 'label'
                });

                expect(labelDOMNode.textContent).to.be.equal('test label');

                expect(controlDOMNode).to.be.an.elem({
                    block: 'label-group',
                    elem: 'control'
                });

                expect(controlDOMNode.children[0]).to.be.block('test-children');
            });

            it('control-position_left', function() {
                this.renderWithProps({
                    labelText: 'test label',
                    controlPosition: 'left',
                    children: React.createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                const controlDOMNode = this.rootComponentDOMNode.children[0];
                const labelDOMNode = this.rootComponentDOMNode.children[1];

                expect(controlDOMNode).to.be.an.elem({
                    block: 'label-group',
                    elem: 'control'
                });

                expect(controlDOMNode.children[0]).to.be.block('test-children');

                expect(labelDOMNode).to.be.an.elem({
                    block: 'label-group',
                    elem: 'label'
                });

                expect(labelDOMNode.textContent).to.be.equal('test label');
            });
        });
    });
});
