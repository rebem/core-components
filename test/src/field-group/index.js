import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FieldGroup from '#field-group';
import FieldGroupLabelClass from '#field-group/label?class';
import FieldGroupContentClass from '#field-group/content?class';

describe('field-group', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(FieldGroup).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(FieldGroup())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(FieldGroup());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('field-group');
                expect(this.component.children().at(0).type()).to.be.equal(FieldGroupLabelClass);
                expect(this.component.children().at(1).type()).to.be.equal(FieldGroupContentClass);
            });

            it('labelPosition', function() {
                this.component.setProps({
                    labelPosition: 'right'
                });

                expect(this.component).to.have.mods({ 'label-position': 'right' });
                expect(this.component.children().at(0).type()).to.be.equal(FieldGroupContentClass);
                expect(this.component.children().at(1).type()).to.be.equal(FieldGroupLabelClass);
            });
        });
    });
});
