import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Title from '#tabs/title';

describe('tabs/title', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Title).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Title({
                title: 'test-title',
                index: 3
            }))).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Title({
                title: 'test-title',
                index: 3
            }));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({
                    block: 'tabs',
                    elem: 'title'
                });
            });

            it('children', function() {
                expect(this.component.find('.tabs__title-inner')).to.have.length(1);
            });

            it('selected mod', function() {
                expect(this.component.prop('className')).to.not.have.mods({
                    selected: true
                });
                this.component.setProps({ selected: 3 });
                expect(this.component.prop('className')).to.have.mods({
                    selected: true
                });
            });
        });

        describe('callbacks', function() {
            it('onTabChange', function() {
                const spy = chai.spy();

                this.component.simulate('click');
                this.component.simulate('click');

                this.component.setProps({
                    onTabChange: spy
                });

                this.component.simulate('click');
                this.component.simulate('click');

                expect(spy).to.have.been.called.twice;
                expect(spy).to.have.been.called.with(3);
            });
        });
    });
});
