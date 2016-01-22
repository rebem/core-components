import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Option from '#select/option';

describe('select/option', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Option).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Option())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Option());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.have.tagName('option');
                expect(this.component).to.be.an.elem({
                    block: 'select',
                    elem: 'option'
                });
            });

            it('props', function() {
                this.component.setProps({ value: 'option1', text: 'option 1' });

                expect(this.component).to.have.attr('value', 'option1');
                expect(this.component).to.have.text('option 1');
            });
        });
    });
});
