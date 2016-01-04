var path = require('path');

module.exports = {
    default: {
        path: path.resolve('build/'),
        files: {
            main: 'index.js'
        }
    },
    src: {
        path: path.resolve('src/'),
        files: {
            main: 'index.js'
        }
    }
};
