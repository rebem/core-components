import Start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';
import files from 'start-files';
import watch from 'start-watch';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import write from 'start-write';
import eslint from 'start-eslint';
import karma from 'start-karma';
import codecov from 'start-codecov';
import * as webpack from 'start-webpack';

const start = Start(reporter());

export function build() {
    return start(
        env('production', () => start(
            files('build/'),
            clean(),
            files('src/**/*.js'),
            read(),
            babel(),
            write('build/')
        ))
    );
}

export function dev() {
    return start(
        env('development', () => start(
            files('build/'),
            clean(),
            files('src/**/*.js'),
            watch(file => start(
                files(file),
                read(),
                babel(),
                write('build/')
            ))
        ))
    );
}

export function lint() {
    return start(
        env('test', () => start(
            files([ 'src/**/*.js', 'demo/**/*.js' ]),
            eslint()
        ))
    );
}

export function test() {
    return start(
        env('test', () => start(
            lint,
            files('coverage/'),
            clean(),
            karma(require('./test/conf/karma.build').default)
        )),
    );
}

export function tdd() {
    return start(
        env('test', () => start(
            lint,
            files('coverage/'),
            clean(),
            karma(require('./test/conf/karma.dev').default)
        ))
    );
}

export function demo() {
    return start(
         webpack.dev(require('./demo/conf/webpack').default)
    );
}

export function ci() {
    return start(
        test,
        files('coverage/lcov.info'),
        read(),
        codecov()
    );
}
