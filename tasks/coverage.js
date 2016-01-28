export default function coverage(resolve, reject) {
    const path = require('path');
    const codecov = require('codecov').handleInput;

    const lcovFilePath = path.resolve('coverage/lcov.info');

    codecov.upload(
        {
            options: {
                file: lcovFilePath,
                disable: 'search,gcov'
            }
        },
        function() {
            resolve();
        },
        function(errorCode, errorBody) {
            reject(errorBody);
        }
    );
}
