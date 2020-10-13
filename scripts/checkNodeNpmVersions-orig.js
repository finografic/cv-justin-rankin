#!/usr/bin/env node

// const shell = require('shelljs');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const compareVersions = require('compare-versions');
const chalk = require('chalk');

const animateProgress = require('./cli-helpers/progress');
const addCheckMark = require('./cli-helpers/checkmark');
const addXMark = require('./cli-helpers/xmark');
const packageJSON = require('./cli-helpers/get-package-json');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');
let interval = -1;

/**
 * Check Node.js version
 * @param {!number} minimalNodeVersion
 * @returns {Promise<any>}
 */
function checkNodeVersion(minimalNodeVersion) {
  return new Promise((resolve, reject) => {
    exec('node --version', (err, stdout) => {
      const nodeVersion = stdout.trim();
      if (err) {
        reject(new Error(err));
      } else if (compareVersions(nodeVersion, minimalNodeVersion) === -1) {
        reject(new Error(`You need Node.js v${minimalNodeVersion} or above but you have v${nodeVersion}`));
      }

      resolve('Node version OK');
    });
  });
}

/**
 * Check NPM version
 * @param {!number} minimalNpmVersion
 * @returns {Promise<any>}
 */
function checkNpmVersion(minimalNpmVersion) {
  return new Promise((resolve, reject) => {
    exec('npm --version', (err, stdout) => {
      const npmVersion = stdout.trim();
      if (err) {
        reject(new Error(err));
      } else if (compareVersions(npmVersion, minimalNpmVersion) === -1) {
        reject(new Error(`You need NPM v${minimalNpmVersion} or above but you have v${npmVersion}`));
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
    addXMark(() => process.stderr.write(chalk.red(` ${error}\n`)));
    process.exit(1);
  }
}

/**
 * End the setup process
 */
function endProcess() {
  clearInterval(interval);
  process.stdout.write(chalk.cyan('\nDone!\n\n'));
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

  console.log(chalk.gray(`Required version of ${chalk.white('node')}`), chalk.cyan(node));
  console.log(chalk.gray(`Required version of ${chalk.white('npm')} `), chalk.cyan(npm));

  const requiredNodeVersion = node.match(/([0-9.]+)/g)[0];
  await checkNodeVersion(requiredNodeVersion).catch((reason) => reportError(reason));

  const requiredNpmVersion = npm.match(/([0-9.]+)/g)[0];
  await checkNpmVersion(requiredNpmVersion).catch((reason) => reportError(reason));

  endProcess();
})();
