import Start from 'start';
import logger from 'start-simple-logger';
import clean from 'start-clean';
import eslint from 'start-eslint';
import babel from 'start-babel';

import { karmaBuild, karmaDev } from './karma';
export { demo } from './demo';
import coverage from './coverage';

const start = Start(logger);

export function lint() {
    return start(
        eslint()
    );
}

export function test() {
    return start(
        eslint(),
        clean('coverage/'),
        karmaBuild
    );
}

export function tdd() {
    return start(
        clean('coverage/'),
        karmaDev
    );
}

export function travis() {
    return start(
        eslint(),
        clean('coverage/'),
        karmaBuild,
        coverage
    );
}

export function build() {
    return start(
        clean('build/'),
        babel('src/**/*.js', 'build/')
    );
}
