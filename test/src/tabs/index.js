import { BEM } from 'rebem';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Tabs from '#tabs';
import TitlesClass from '#tabs/titles?class';
import PanelsClass from '#tabs/panels?class';

describe.only('tabs', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Tabs).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Tabs())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Tabs({
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
            }));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('tabs');
                expect(this.component.children().at(0).type()).to.be.equal(TitlesClass);
                expect(this.component.children().at(1).type()).to.be.equal(PanelsClass);
            });

            describe.skip('with tabs', function() {
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
                            return BEM(
                                {
                                    block: 'test',
                                    key
                                },
                                tabs[1].title
                            );
                        }
                    });

                    expect(this.titlesDOMNode).to.be.a.block('test');
                    expect(this.titlesDOMNode.innerHTML).to.be.equal(this.props.tabs[1].title);
                });

                it('with custom panels', function() {
                    this.renderWithProps({
                        ...this.props,
                        renderPanels({ tabs, key }) {
                            return BEM(
                                {
                                    block: 'test',
                                    key
                                },
                                tabs[1].title
                            );
                        }
                    });

                    expect(this.panelsDOMNode).to.be.a.block('test');
                    expect(this.panelsDOMNode.innerHTML).to.be.equal(this.props.tabs[1].title);
                });
            });
        });

        describe.skip('API', function() {
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

        describe.skip('callbacks', function() {
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

        describe.skip('propTypes', function() {
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
