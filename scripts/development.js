#!/usr/bin/env node

const { exec } = require('child_process');

const dotenv = require('dotenv');
const { parsed: config } = dotenv.config();
const { BROWSER, BROWSER_ALIAS, BROWSER_ARGS } = config;

// eslint-disable-next-line quotes
const cmdBrowserOpen = `${BROWSER} ${BROWSER_ARGS}`;
const cmdBrowserBringForward = `wmctrl -a "${BROWSER_ALIAS}"`;
const cmdBrowserClose = `wmctrl -c "${BROWSER_ALIAS}"`;

const execDevelopment = exec(`${cmdBrowserBringForward}`, (err) => {
  if (err) {
    console.log('INSIDE IF - OPENNING BROWSER...', err);
    exec(`${cmdBrowserOpen}`);
    exec(`react-app-rewired start`);
  } else {
    console.log('INSIDE IF - BROWSER ALREADY OPEN', err);
    exec(`${cmdBrowserBringForward}`);
  }
});

execDevelopment.stdout.on('data', (data) => {
  console.log('>>>', data);
  // spawn(`xrandr --output ${data} --brightness ${brightness.setting}`, {
  //   stdio: 'inherit',
  //   shell: true,
  // });
  // spawn(`xrandr`, ['--output $DISPLAY', `--brightness ${brightness.setting}`], {
  //   stdio: 'inherit',
  //   shell: true,
  //   env: { DISPLAY: data },
  // });
});
