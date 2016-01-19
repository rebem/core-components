import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LabelGroup from '#label-group';
import LabelGroupLabelClass from '#label-group/label?class';
import LabelGroupControlClass from '#label-group/control?class';

describe('label-group', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(LabelGroup).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(LabelGroup())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(LabelGroup());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('label-group');
                expect(this.component.children().at(0).type()).to.be.equal(LabelGroupLabelClass);
                expect(this.component.children().at(1).type()).to.be.equal(LabelGroupControlClass);
            });

            it('controlPosition', function() {
                this.component.setProps({
                    controlPosition: 'left'
                });

                expect(this.component.children().at(0).type()).to.be.equal(LabelGroupControlClass);
                expect(this.component.children().at(1).type()).to.be.equal(LabelGroupLabelClass);
            });
        });
    });
});
