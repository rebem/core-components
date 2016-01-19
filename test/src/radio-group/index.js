import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import RadioClass from '#radio?class';
import Radio from '#radio';
import RadioGroup from '#radio-group';

describe('radio-group', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(RadioGroup).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(
                RadioGroup({
                    onChange() {}
                })
            )).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(RadioGroup({
                onChange() {}
            }));
        });

        describe('DOM', function() {
            it('initial', function() {
                const component = shallow(RadioGroup({
                    onChange() {}
                }));

                expect(component).to.be.block('radio-group');
            });

            it('children', function() {
                const component = shallow(
                    RadioGroup(
                        {
                            onChange() {},
                            value: 'radio2'
                        },
                        Radio({ name: 'test', value: 'radio1' }),
                        Radio({ name: 'test', value: 'radio2' })
                    )
                );
                const children = component.find(RadioClass);
                const radio1 = children.at(0);
                const radio2 = children.at(1);

                expect(radio1).to.not.have.prop('checked', true);
                expect(radio2).to.have.prop('checked', true);
            });

            it('onChange', function(done) {
                const component = mount(
                    RadioGroup(
                        {
                            onChange(value) {
                                expect(value).to.be.equal('radio1');

                                done();
                            },
                            value: 'radio2'
                        },
                        Radio({ name: 'test', value: 'radio1' }),
                        Radio({ name: 'test', value: 'radio2' })
                    )
                );

                const children = component.find('.radio__control');
                const radio1 = children.at(0);

                radio1.simulate('change', { target: { checked: true } });
            });
        });
    });
});
