import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Input from '#input/_type/search';

describe.skip('input/_type/search', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Input).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Input()))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(Input(props));
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
                this.inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'input__control');
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode).to.have.mods({ type: 'search' });
                // expect(this.inputControlDOMNode.type).to.be.equal('search');
                expect(this.inputControlDOMNode.getAttribute('autocomplete')).to.be.equal('off');
                expect(this.inputControlDOMNode.getAttribute('autocapitalize')).to.be.equal('off');
                expect(this.inputControlDOMNode.getAttribute('autocorrect')).to.be.equal('off');
                expect(this.inputControlDOMNode.getAttribute('spellcheck')).to.be.equal('off');
            });
        });

        describe('API', () => {
            it('val()', function() {
                TestUtils.Simulate.change(this.inputControlDOMNode, { target: { value: 'test' } });
                expect(this.rootComponent.val()).to.be.equal('test');
            });
        });
    });
});
