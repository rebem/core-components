import chai from 'chai';
import chaiBEM from 'chai-bem';
import chaiSpies from 'chai-spies';
import chaiEnzyme from 'chai-enzyme';
import { ShallowWrapper } from 'enzyme';

chai.use(chaiBEM());
chai.use(chaiSpies);
chai.use(chaiEnzyme());
chai.use((_chai, utils) => {
    const Assertion = _chai.Assertion;

    function overwrite(name) {
        Assertion.overwriteMethod(name, (_super) => {
            return function wrapAssertion() {
                const entity = this._obj;

                if (entity instanceof ShallowWrapper) {
                    this._obj = entity.prop('className');
                }

                _super.apply(this, arguments);
            };
        });
    }

    [ 'block', 'elem', 'mods' ].forEach(overwrite);
});

const componentsContext = require.context('../src/', true, /index\.js$/);
const testsContext = require.context('./src/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
testsContext.keys().forEach(testsContext);

// catch react warnings to be able to test PropTypes
before(function() {
    console.error = error => {
        throw Error(error);
    };
});
