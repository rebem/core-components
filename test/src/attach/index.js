import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Attach from '#attach';

describe('attach', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Attach).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Attach())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Attach());
            this.control = this.component.find('.attach__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'file');
                expect(this.component).to.be.a.block('attach');
                expect(this.control).to.be.an.elem({
                    block: 'attach',
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
