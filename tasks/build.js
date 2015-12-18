const inFileName = 'index.js';
const outFileName = 'index.js';

export function babelBuild() {
    const fs = require('fs');
    const path = require('path');
    const recursiveReadDir = require('node-dir');
    const mkdirp = require('mkdirp');
    const babel = require('babel-core');

    const inRootDir = path.resolve('src/');
    const outRootDir = path.resolve('build/');

    return new Promise((rootResolve, rootReject) => {
        recursiveReadDir.paths(inRootDir, (readDirErr, readDirResult) => {
            if (readDirErr) {
                return rootReject(readDirErr);
            }

            return Promise.all(
                readDirResult.files
                    .filter(inFile => path.extname(inFile) === path.extname(inFileName))
                    .map(inFile => {
                        const inDir = path.dirname(inFile);
                        const relativeInDir = path.relative(inRootDir, inDir);
                        const outDir = path.resolve(outRootDir, relativeInDir);
                        const outFile = path.resolve(outDir, outFileName);

                        return new Promise((resolve, reject) => {
                            mkdirp(outDir, (mkdirpErr) => {
                                if (mkdirpErr) {
                                    return reject(mkdirpErr);
                                }

                                babel.transformFile(inFile, (babelErr, babelResult) => {
                                    fs.writeFile(outFile, babelResult.code, 'utf-8', (writeFileErr) => {
                                        if (writeFileErr) {
                                            return reject(writeFileErr);
                                        }

                                        resolve();
                                    });
                                });
                            });
                        });
                    })
            )
            .then(rootResolve)
            .catch(rootReject);
        });
    });
}
