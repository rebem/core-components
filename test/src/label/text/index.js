import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LabelText from '#label/text';

describe('label/text', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(LabelText).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(LabelText())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(
                LabelText({
                    text: 'test'
                })
            );
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.have.tagName('div');
                expect(this.component).to.be.an.elem({ block: 'label', elem: 'text' });
            });

            it('text', function() {
                expect(this.component).to.contain.text('test');
            });
        });
    });
});
