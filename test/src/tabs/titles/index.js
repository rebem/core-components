import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Titles from '#tabs/titles';

describe('tabs/titles', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Titles).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Titles())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Titles(null, 'test-children'));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({
                    block: 'tabs',
                    elem: 'titles'
                });
            });

            it('children', function() {
                expect(this.component.text()).to.be.equal('test-children');
            });
        });
    });
});
