'use strict';

const { readFileSync } = require('fs');
const { join } = require('path');
const git = require('./git');

const externalJSON = JSON.parse(readFileSync(join(__dirname, '../external-config.json')));
const { owner, name, checkout } = externalJSON.from;

git.updateExternal(`https://github.com/${owner}/${name}.git`, checkout);
