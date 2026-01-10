/**
 * Build ccesengine in PREVIEW mode for browser-based editor
 *
 * This produces a build with:
 * - EDITOR = false
 * - PREVIEW = true
 * - BUILD = false
 * - DEV = true
 *
 * PREVIEW mode works in browser without Node.js dependencies,
 * while still enabling development features.
 *
 * Note: We use PREVIEW instead of EDITOR because:
 * - EDITOR mode requires Electron/Node.js (EditorExtends, require('fs'), etc.)
 * - PREVIEW mode works in pure browser environment
 * - We implement our own EditorBundle for asset loading
 */
const { join } = require('path');
const { ensureDir, emptyDir } = require('fs-extra');
const { magenta } = require('chalk');

const { buildEngine } = require('@cocos/ccbuild');

const prefix = ''.padStart(20, '=');
console.log(magenta(`${prefix} Build Preview ESM (for Editor) ${prefix}`));

(async function exec () {
    const outDir = join(__dirname, '..', 'bin', 'editor', 'esm');
    await ensureDir(outDir);
    await emptyDir(outDir);

    await buildEngine({
        engine: join(__dirname, '..'),
        moduleFormat: 'esm',
        mode: 'PREVIEW',  // PREVIEW mode: works in browser without Node.js
        platform: 'HTML5',
        out: outDir,
        compress: false,
        sourceMap: true,
    });

    console.log(magenta(`\nPreview ESM build complete: ${outDir}`));
}());
