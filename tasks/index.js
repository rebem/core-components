export { cleanBuild, cleanCoverage } from './clean';
export { babelBuild } from './build';
export { karmaBuild, karmaDev } from './karma';
export { eslint } from './lint';
export { coverage } from './coverage';
export { demo } from './demo';

export const test = [
    exports.eslint,
    exports.cleanCoverage,
    exports.karmaBuild
];

export const tdd = [
    exports.cleanCoverage,
    exports.karmaDev
];

export const travis = [
    exports.eslint,
    exports.cleanCoverage,
    exports.karmaBuild,
    exports.coverage
];

export const build = [
    exports.cleanBuild,
    exports.babelBuild
];
