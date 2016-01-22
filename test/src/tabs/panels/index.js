import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Panels from '#tabs/panels';

describe('tabs/panels', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Panels).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Panels())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Panels(null, 'test-children'));
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({
                    block: 'tabs',
                    elem: 'panels'
                });
            });

            it('children', function() {
                expect(this.component.text()).to.be.equal('test-children');
            });
        });
    });
});
