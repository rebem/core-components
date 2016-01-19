import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Colorpicker from '#colorpicker';

describe('colorpicker', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Colorpicker).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Colorpicker())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Colorpicker());
            this.control = this.component.find('.colorpicker__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'color');
                expect(this.component).to.be.a.block('colorpicker');
                expect(this.control).to.be.an.elem({
                    block: 'colorpicker',
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
