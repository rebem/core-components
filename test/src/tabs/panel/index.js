import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Panel from '#tabs/panel';

describe('tabs/panels', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Panel).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Panel({ index: 5 }))).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Panel({ index: 5 }, 'test-children'));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({
                    block: 'tabs',
                    elem: 'panel'
                });
            });

            it('children', function() {
                expect(this.component.text()).to.be.equal('test-children');
            });
        });

        it('selected mod', function() {
            expect(this.component.prop('className')).to.not.have.mods({
                selected: true
            });
            this.component.setProps({ selected: 5 });
            expect(this.component.prop('className')).to.have.mods({
                selected: true
            });
        });
    });
});
