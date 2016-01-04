var path = require('path');

module.exports = {
    default: {
        path: path.resolve(__dirname, 'build/'),
        files: {
            main: 'index.js'
        }
    },
    src: {
        path: path.resolve(__dirname, 'src/'),
        files: {
            main: 'index.js'
        }
    }
};
