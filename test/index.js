import chai from 'chai';
import chaiBEM from 'chai-bem';
import chaiSpies from 'chai-spies';

chai.use(chaiBEM());
chai.use(chaiSpies);

const componentsContext = require.context('../components/', true, /index\.js$/);
const testsContext = require.context('./components/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
testsContext.keys().forEach(testsContext);
