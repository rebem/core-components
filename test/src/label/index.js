import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Label from '#label';
import LabelTextClass from '#label/text?class';
import LabelControlClass from '#label/control?class';

describe('label', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Label).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Label())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Label());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('label');
                expect(this.component.children().at(0).type()).to.be.equal(LabelTextClass);
                expect(this.component.children().at(1).type()).to.be.equal(LabelControlClass);
            });

            it('textPosition', function() {
                this.component.setProps({
                    textPosition: 'right'
                });

                expect(this.component).to.have.mods({ 'text-position': 'right' });
                expect(this.component.children().at(0).type()).to.be.equal(LabelControlClass);
                expect(this.component.children().at(1).type()).to.be.equal(LabelTextClass);
            });
        });
    });
});
