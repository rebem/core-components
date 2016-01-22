import { BEM } from 'rebem';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tabs from '#tabs';
import TitlesClass from '#tabs/titles?class';
import TitleClass from '#tabs/title?class';
import PanelsClass from '#tabs/panels?class';
import PanelClass from '#tabs/panel?class';

describe('tabs', function() {
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
                ],
                selected: 1
            };
            this.component = shallow(Tabs(this.props));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('tabs');
                expect(this.component.children().at(0).type()).to.be.equal(TitlesClass);
                expect(this.component.children().at(1).type()).to.be.equal(PanelsClass);
            });

            describe('with tabs', function() {
                it('titles', function() {
                    expect(this.component.find(TitleClass)).to.have.length(2);
                });

                it('panels', function() {
                    expect(this.component.find(PanelClass)).to.have.length(2);
                });

                it('with custom titles', function() {
                    this.component.setProps({
                        renderTitles({ tabs, key }) {
                            return BEM({ block: 'test-title', key },
                                tabs[1].title
                            );
                        }
                    });

                    expect(this.component.find('.test-title')).to.have.length(1);
                    expect(this.component.find('.test-title').text()).to.be.equal(this.props.tabs[1].title);
                });

                it('with custom panels', function() {
                    this.component.setProps({
                        renderPanels({ tabs, key }) {
                            return BEM({ block: 'test-panel', key },
                                tabs[1].title
                            );
                        }
                    });

                    expect(this.component.find('.test-panel')).to.have.length(1);
                    expect(this.component.find('.test-panel').text()).to.be.equal(this.props.tabs[1].title);
                });
            });
        });

        describe('propTypes', function() {
            it('throws error if incorrect selected value', function() {
                const incorrectRender = () => {
                    this.component.setProps({
                        selected: 3
                    });
                };

                expect(incorrectRender).to.throw(Error);
            });
        });
    });
});
