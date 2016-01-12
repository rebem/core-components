import ReactDOM from 'react-dom';
import BEM from '@yummies/bem';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import { renderOnce } from 'test/helpers/render';

import Tabs from '#tabs';

describe('tabs', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Tabs).to.exist;
        });

        it('is a component', function() {
            const Component = Tabs();

            expect(TestUtils.isCompositeComponent(renderOnce(Component))).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Tabs(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.titlesDOMNode = this.rootComponentDOMNode.children[0];
                this.panelsDOMNode = this.rootComponentDOMNode.children[1];
            };

            this.props = {
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
            };

            this.renderWithProps(this.props);
        });

        describe('DOM', function() {
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

            describe('with tabs', function() {
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

                it('selected', function() {
                    expect(this.titlesDOMNode.children[0]).to.have.mods({
                        selected: true
                    });

                    expect(this.panelsDOMNode.children[0]).to.have.mods({
                        selected: true
                    });
                });

                it('with custom titles', function() {
                    this.renderWithProps({
                        ...this.props,
                        renderTitles({ tabs, key }) {
                            return BEM({
                                block: 'test',
                                content: tabs[1].title,
                                props: { key }
                            });
                        }
                    });

                    expect(this.titlesDOMNode).to.be.a.block('test');
                    expect(this.titlesDOMNode.innerHTML).to.be.equal(this.props.tabs[1].title);
                });

                it('with custom panels', function() {
                    this.renderWithProps({
                        ...this.props,
                        renderPanels({ tabs, key }) {
                            return BEM({
                                block: 'test',
                                content: tabs[1].title,
                                props: { key }
                            });
                        }
                    });

                    expect(this.panelsDOMNode).to.be.a.block('test');
                    expect(this.panelsDOMNode.innerHTML).to.be.equal(this.props.tabs[1].title);
                });
            });
        });

        describe('API', function() {
            it('selectTab', function() {
                this.props.selected = 1;
                this.renderWithProps(this.props);
                expect(this.panelsDOMNode.children[1]).to.have.mods({
                    selected: true
                });

                this.props.selected = 0;
                this.renderWithProps(this.props);
                expect(this.panelsDOMNode.children[0]).to.have.mods({
                    selected: true
                });
            });
        });

        describe('callbacks', function() {
            it('onTabChange', function() {
                const spy = chai.spy();

                this.renderWithProps(this.props);
                TestUtils.Simulate.click(this.titlesDOMNode.children[1]);
                TestUtils.Simulate.click(this.titlesDOMNode.children[0]);

                this.renderWithProps({
                    ...this.props,
                    selected: 0,
                    onTabChange: spy
                });
                TestUtils.Simulate.click(this.titlesDOMNode.children[1]);
                TestUtils.Simulate.click(this.titlesDOMNode.children[0]);

                expect(spy).to.have.been.called.twice;
                expect(spy).to.have.been.called.with(0);
            });
        });

        describe('propTypes', function() {
            it('throws error if incorrect selected value', function() {
                const incorrectRender = () => {
                    this.props.selected = 3;
                    this.renderWithProps(this.props);
                };

                expect(incorrectRender).to.throw(Error);
            });
        });
    });
});
