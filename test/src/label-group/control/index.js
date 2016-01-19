import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LabelGroupControl from '#label-group/control';

describe('label-group/control', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(LabelGroupControl).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(LabelGroupControl())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(LabelGroupControl());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({ block: 'label-group', elem: 'control' });
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
