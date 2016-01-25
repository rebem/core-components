import eslint from 'start-eslint';
import clean from 'start-clean';

export { babelBuild } from './build';
export { karmaBuild, karmaDev } from './karma';
export { coverage } from './coverage';
export { demo } from './demo';

export const lint = eslint();
export const cleanBuild = clean('build/');
export const cleanCoverage = clean('coverage/');

export const test = [
    lint,
    cleanCoverage,
    exports.karmaBuild
];

export const tdd = [
    cleanCoverage,
    exports.karmaDev
];

export const travis = [
    eslint(),
    cleanCoverage,
    exports.karmaBuild,
    exports.coverage
];

export const build = [
    cleanBuild,
    exports.babelBuild
];
