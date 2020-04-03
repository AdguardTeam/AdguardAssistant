const fs = require('fs');

const packagePath = 'package.json';

// Parse package json
const pkg = JSON.parse(fs.readFileSync(packagePath).toString());

// Parse build number and increment it
const versionParts = pkg.version.split('.');
const buildPartIdx = versionParts.length - 1;
const buildPart = versionParts[buildPartIdx];
const buildNumber = parseInt(buildPart, 10) + 1;
versionParts[buildPartIdx] = buildNumber.toString();
pkg.version = versionParts.join('.');

// Write the new version
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 4));
