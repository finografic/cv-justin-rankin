const fs = require('fs');

// LOOKS FOR package.json IN ROOT/PROCESS PATH:
module.exports = JSON.parse(fs.readFileSync('package.json', 'utf8'));
