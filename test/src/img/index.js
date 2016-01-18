import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'test/helpers/render';

import Img from '#img';

describe.skip('img', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Img).to.exist;
        });

        it('is a component', () => {
            render(Img)
                .test(({ component }) => {
                    expect(TestUtils.isCompositeComponent(component));
                });
        });
    });

    describe('render', () => {
        describe('DOM', () => {
            it('initial', function() {
                render(Img)
                    .extractRootDOMNode()
                    .test(({ rootDOMNode }) => {
                        expect(rootDOMNode.tagName).to.be.equal('IMG');
                        expect(rootDOMNode).to.be.a.block('img');
                    });
            });

            it('props', function() {
                const testWidth = 200;

                render(Img, { width: testWidth })
                    .extractRootDOMNode()
                    .test(({ rootDOMNode }) => {
                        expect(rootDOMNode.width).to.be.equal(testWidth);
                    });
            });
        });
    });
});
