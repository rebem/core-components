function runKarma(config, resolve, reject) {
    const { Server } = require('karma');
    const karmaServer = new Server(config, function(exitCode) {
        if (exitCode !== 0) {
            return reject();
        }

        resolve();
    });

    karmaServer.start();
}

export function karmaBuild(resolve, reject) {
    process.env.NODE_ENV = 'test';

    const karmaConfig = require('../test/conf/karma.build').default;

    return runKarma(karmaConfig, resolve, reject);
}

export function karmaDev(resolve, reject) {
    process.env.NODE_ENV = 'test';

    const karmaConfig = require('../test/conf/karma.dev').default;

    return runKarma(karmaConfig, resolve, reject);
}
