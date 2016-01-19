import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Radio from '#radio';

describe('radio', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Radio).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Radio())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Radio());
            this.control = this.component.find('.radio__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'radio');
                expect(this.component).to.be.a.block('radio');
                expect(this.control).to.be.an.elem({
                    block: 'radio',
                    elem: 'control'
                });
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
