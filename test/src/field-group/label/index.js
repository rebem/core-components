import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FieldGroupLabel from '#field-group/label';

describe('field-group/label', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(FieldGroupLabel).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(FieldGroupLabel())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(
                FieldGroupLabel({
                    label: 'test'
                })
            );
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.have.tagName('label');
                expect(this.component).to.be.an.elem({ block: 'field-group', elem: 'label' });
            });

            it('labelText', function() {
                expect(this.component).to.contain.text('test');
            });
        });
    });
});
