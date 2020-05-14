/*
# full-icu

Starting with Node.js 13.0.0 full-icu is supported by default.

  If using React Intl in an earlier version of Node.js, your node binary has to either:
  a) Get compiled with full-icu using these instructions
  b) Uses full-icu npm package

If your node version is missing any of the Intl APIs above, you have to polyfill them accordingly.

*/

require('full-icu');
const january = new Date(9e8);
const english = new Intl.DateTimeFormat('en', { month: 'long' });
const spanish = new Intl.DateTimeFormat('es', { month: 'long' });

console.log(english.format(january));
// Prints "January"
console.log(spanish.format(january));
// Prints "M01" on small-icu
// Should print "enero"

// To check for support for a non-English locale (i.e. full-icu or system-icu), Intl.DateTimeFormat can be a good distinguishing factor:

function hasFullICU() {
  try {
    const january = new Date(9e8);
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
    return spanish.format(january) === 'enero';
  } catch (err) {
    return false;
  }
}

console.log(hasFullICU());

console.log('------------------------------------------------');

// Get display names of region in English
var regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
console.log(regionNames.of('419')); // "Latin America"
console.log(regionNames.of('BZ')); // "Belize"
console.log(regionNames.of('US')); // "United States"
console.log(regionNames.of('BA')); // "Bosnia & Herzegovina"
console.log(regionNames.of('MM')); // "Myanmar (Burma)"

// Get display names of region in Traditional Chinese
regionNames = new Intl.DisplayNames(['zh-Hant'], { type: 'region' });
console.log(regionNames.of('419')); // "拉丁美洲"
console.log(regionNames.of('BZ')); // "貝里斯"
console.log(regionNames.of('US')); // "美國"
console.log(regionNames.of('BA')); // "波士尼亞與赫塞哥維納"
console.log(regionNames.of('MM')); // "緬甸"
