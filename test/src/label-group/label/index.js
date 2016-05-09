import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LabelGroupLabel from '#label-group/label';

describe('label-group/label', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(LabelGroupLabel).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(LabelGroupLabel())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(
                LabelGroupLabel({
                    labelText: 'test'
                })
            );
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.have.tagName('div');
                expect(this.component).to.be.an.elem({ block: 'label-group', elem: 'label' });
            });

            it('labelText', function() {
                expect(this.component).to.contain.text('test');
            });
        });
    });
});
