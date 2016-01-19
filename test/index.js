import chai from 'chai';
import chaiBEM from 'chai-bem';
import chaiSpies from 'chai-spies';
import chaiEnzyme from 'chai-enzyme';
import { ReactWrapper, ShallowWrapper } from 'enzyme';

chai.use(chaiBEM({
    entityHook(entity) {
        if (entity instanceof ShallowWrapper || entity instanceof ReactWrapper) {
            return entity.prop('className');
        }

        return entity;
    }
}));
chai.use(chaiSpies);
chai.use(chaiEnzyme());

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
