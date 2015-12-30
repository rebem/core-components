import TestUtils from 'react-addons-test-utils';
import YummiesDOM from '@yummies/dom';
import chai, { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Tabs from '#tabs';

describe('tabs', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Tabs).to.exist;
        });

        it('is a component', () => {
            const Component = Tabs();

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Tabs(props));
                this.rootComponentDOMNode = YummiesDOM.findDOMNode(this.rootComponent);
                this.titlesDOMNode = this.rootComponentDOMNode.children[0];
                this.panelsDOMNode = this.rootComponentDOMNode.children[1];
            };

            this.renderWithProps({
                tabs: [
                    {
                        title: 'first',
                        content: '1'
                    },
                    {
                        title: 'second',
                        content: '2'
                    }
                ]
            });
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode).to.be.a.block('tabs');
                expect(this.titlesDOMNode).to.be.an.elem({
                    block: 'tabs',
                    elem: 'titles'
                });
                expect(this.panelsDOMNode).to.be.an.elem({
                    block: 'tabs',
                    elem: 'panels'
                });
            });

            describe('with tabs', () => {
                it('titles', function() {
                    const firstTitle = this.titlesDOMNode.children[0];
                    const secondTitle = this.titlesDOMNode.children[1];

                    expect(firstTitle).to.be.an.elem({
                        block: 'tabs',
                        elem: 'title'
                    });
                    expect(secondTitle).to.be.an.elem({
                        block: 'tabs',
                        elem: 'title'
                    });

                    expect(firstTitle.textContent).to.be.equal('first');
                    expect(secondTitle.textContent).to.be.equal('second');
                });

                it('panels', function() {
                    const firstPanel = this.panelsDOMNode.children[0];
                    const secondPanel = this.panelsDOMNode.children[1];

                    expect(firstPanel).to.be.an.elem({
                        block: 'tabs',
                        elem: 'panel'
                    });
                    expect(secondPanel).to.be.an.elem({
                        block: 'tabs',
                        elem: 'panel'
                    });

                    expect(firstPanel.textContent).to.be.equal('1');
                    expect(secondPanel.textContent).to.be.equal('2');
                });

                it.skip('selected', function() {
                    expect(this.titlesDOMNode.children[0]).to.have.mods({
                        selected: true
                    });

                    expect(this.panelsDOMNode.children[0]).to.have.mods({
                        selected: true
                    });
                });
            });
        });

        describe('API', () => {
            it.skip('selectTab', function() {
                this.rootComponent.selectTab(1);

                expect(this.rootComponent.state.selected).to.be.equal(1);

                this.rootComponent.selectTab(0);

                expect(this.rootComponent.state.selected).to.be.equal(0);
            });
        });

        describe('callbacks', () => {
            it.skip('onTabChange', function() {
                const spy = chai.spy();

                this.renderWithProps({
                    onTabChange: spy
                });

                this.rootComponent.selectTab(1);

                expect(spy).to.have.been.called.once;
                expect(spy).to.have.been.called.with(1);

                this.renderWithProps();

                expect(spy).to.have.been.called.once;
                expect(spy).to.have.been.called.with(1);
            });
        });
    });
});
