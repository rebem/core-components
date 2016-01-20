import { render } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Popup from '#popup';

describe('popup', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Popup).to.exist;
        });

        it('is a component', function() {
            expect(
                TestUtils.isElement(
                    Popup({
                        onHide() {}
                    })
                )
            ).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(
                Popup(
                    {
                        visible: false,
                        onHide() {}
                    },
                    'popup content'
                )
            );
            this.overlay = this.component.find('.popup__overlay');
            this.content = this.component.find('.popup__content');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.component).to.be.a.block('popup');
                expect(this.component).to.not.have.mods({ visible: true });
                expect(this.overlay).to.have.length(1);
                expect(this.content).to.have.length(1);
            });

            it('visible', function() {
                this.component.setProps({
                    visible: true
                });

                expect(this.component).to.have.mods({ visible: true });
            });

            it('content', function() {
                expect(this.content).to.have.text('popup content');
            });

            describe('focus', function() {
                it('visible', function() {
                    const dummyDiv = document.createElement('div');
                    const popup = Popup(
                        {
                            visible: true,
                            onHide() {}
                        },
                        'popup content'
                    );

                    document.body.appendChild(dummyDiv);

                    render(popup, dummyDiv);

                    expect(document.activeElement).to.be.block('popup');
                    expect(document.activeElement).to.have.mods({ visible: true });

                    dummyDiv.remove();
                });

                it('hidden', function() {
                    const dummyDiv = document.createElement('div');
                    const popup = Popup(
                        {
                            visible: false,
                            onHide() {}
                        },
                        'popup content'
                    );

                    document.body.appendChild(dummyDiv);

                    render(popup, dummyDiv);

                    expect(document.activeElement).to.be.equal(document.body);

                    dummyDiv.remove();
                });
            });

            describe('hide with Escape', function() {
                it('onHide', function() {
                    const spy = chai.spy();

                    this.component.setProps({
                        onHide: spy
                    });

                    this.component.simulate('keyUp', {
                        key: 'Escape',
                        keyCode: 27,
                        which: 27
                    });

                    expect(spy).to.have.been.called.once();
                });

                it('onKeyUp', function() {
                    const escapeKey = {
                        key: 'Escape',
                        keyCode: 27,
                        which: 27
                    };
                    const spy = chai.spy();

                    this.component.setProps({
                        onKeyUp: spy
                    });

                    this.component.simulate('keyUp', escapeKey);

                    expect(spy).to.have.been.called.once();
                    expect(spy).to.have.been.called.with(escapeKey);
                });

                it('disabled', function() {
                    const hideSpy = chai.spy();
                    const keyupSpy = chai.spy();

                    this.component.setProps({
                        hideWithEsc: false,
                        onHide: hideSpy,
                        onKeyUp: keyupSpy
                    });

                    this.component.simulate('keyUp', {
                        key: 'Escape',
                        keyCode: 27,
                        which: 27
                    });

                    expect(hideSpy).to.not.have.been.called.once();
                    expect(keyupSpy).to.have.been.called.once();
                });
            });
        });
    });
});
