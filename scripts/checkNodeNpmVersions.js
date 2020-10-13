#!/usr/bin/env node

const { exec } = require('child_process');
const packageJSON = require('./cli-helpers/get-package-json');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');
let interval = -1;

/**
 * Check Node.js version
 * @param {!number} minVersionNode
 * @returns {Promise<any>}
 */
function checkNodeVersion(minVersionNode) {
  return new Promise((resolve, reject) => {
    exec('node --version', (err, stdout) => {
      const MIN_VERSION_NODE = minVersionNode ? minVersionNode.trim() : stdout.trim();
      if (stdout < MIN_VERSION_NODE) {
        reject(new Error(`[ERROR] You need node version @>=${MIN_VERSION_NODE} but you have ${stdout}`));
      }

      resolve('Node version OK');
    });
  });
}

/**
 * Check NPM version
 * @param {!number} minVersionNpm
 * @returns {Promise<any>}
 */
function checkNpmVersion(minVersionNpm) {
  return new Promise((resolve, reject) => {
    exec('npm --version', (err, stdout) => {
      const MIN_VERSION_NPM = minVersionNpm ? minVersionNpm.trim() : stdout.trim();
      if (stdout < MIN_VERSION_NPM) {
        reject(new Error(`[ERROR] You need npm version @>=${MIN_VERSION_NPM} but you have ${stdout}`));
      }

      resolve('NPM version OK');
    });
  });
}

/**
 * Report the the given error and exits the setup
 * @param {string} error
 */
function reportError(error) {
  clearInterval(interval);

  if (error) {
    process.stdout.write('\n\n');
    process.stderr.write(` ✘\n`);
    process.exit(1);
  }
}

/**
 * End the setup process
 */
function endProcess() {
  clearInterval(interval);
  process.exit(0);
}

/**
 * RUN !!
 */
(async () => {
  // Take the required Node and NPM version from package.json
  const {
    engines: { node, npm },
  } = packageJSON;

  console.log(`Required version of node: `, node);
  console.log(`Required version of npm:  `, npm);
  console.log(`\n`);

  const requiredNodeVersion = node.match(/([0-9.]+)/g)[0];
  await checkNodeVersion(requiredNodeVersion).catch((reason) => reportError(reason));

  const requiredNpmVersion = npm.match(/([0-9.]+)/g)[0];
  await checkNpmVersion(requiredNpmVersion).catch((reason) => reportError(reason));

  endProcess();
})();
