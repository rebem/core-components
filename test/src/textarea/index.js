import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Textarea from '#textarea';

describe('textarea', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Textarea).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Textarea())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Textarea());
            this.control = this.component.find('.textarea__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('textarea');
                expect(this.component).to.be.a.block('textarea');
                expect(this.control).to.be.an.elem({
                    block: 'textarea',
                    elem: 'control'
                });
            });

            it('disabled', function() {
                this.component.setProps({ disabled: true });
                expect(this.component).to.have.mods({ disabled: true });
            });

            it('children', function() {
                this.component.setProps({
                    children: createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(this.component.find('.test-children')).to.be.block('test-children');
            });
        });
    });
});
