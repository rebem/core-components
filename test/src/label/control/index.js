import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LabelControl from '#label/control';

describe('label/control', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(LabelControl).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(LabelControl())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(LabelControl());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({ block: 'label', elem: 'control' });
            });

            it('children', function() {
                const dummy = createElement('div');

                this.component.setProps({
                    children: dummy
                });

                expect(this.component).to.contain(dummy);
            });
        });
    });
});
