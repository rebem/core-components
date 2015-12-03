const componentsContext = require.context('../components/', true, /index\.js$/);
const testsContext = require.context('./components/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
testsContext.keys().forEach(testsContext);
