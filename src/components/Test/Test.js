import React from 'react';
// TESTING:
import PropTypes from 'prop-types';
import { FormattedDate, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { useIntl } from 'react-intl';
// [ en, en-US, en-CA, en-UK, en-GB ]
// [ es, es-ES ]
// [ ca, ca-ES ]

console.log('------------------------------------------------');

// Get display names of region in English
var regionNames = new Intl.DisplayNames(['en-GB'], { type: 'region' });
console.log(regionNames.of('419')); // "Latin America"
console.log(regionNames.of('US')); // "United States"
console.log(regionNames.of('BA')); // "Bosnia & Herzegovina"

console.log('------------------------------------------------');

// Get display names of region in Traditional Chinese
regionNames = new Intl.DisplayNames(['ca-ES'], { type: 'region' });
console.log(regionNames.of('419'));
console.log(regionNames.of('US'));
console.log(regionNames.of('BA'));

console.log('------------------------------------------------');

import IntlMessageFormat from 'intl-messageformat';
import memoizeIntlConstructor from 'intl-format-cache';
const formatters = {
  getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
  getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
  getPluralRules: memoizeIntlConstructor(Intl.PluralRules),
};
new IntlMessageFormat('hello {number, number}', 'en', undefined, {
  formatters,
}).format({ number: 3 }); // prints out `hello, 3`

export const Abc = (isVisible = true) => {
  return <div data-isVisible={isVisible}>**ABC** !!</div>;
};
