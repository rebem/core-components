import chai from 'chai';
import chaiBEM from 'chai-bem';
import chaiSpies from 'chai-spies';

chai.use(chaiBEM());
chai.use(chaiSpies);

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
