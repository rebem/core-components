import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FieldGroupContent from '#field-group/content';

describe('field-group/content', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(FieldGroupContent).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(FieldGroupContent())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(FieldGroupContent());
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.an.elem({ block: 'field-group', elem: 'content' });
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
