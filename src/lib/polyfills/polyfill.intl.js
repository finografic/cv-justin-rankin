/*
React Intl relies on these Intl APIs:

    Intl.NumberFormat: Available on IE11+
    Intl.DateTimeFormat: Available on IE11+
    Intl.PluralRules: This can be polyfilled using this package.
    Intl.RelativeTimeFormat: This can be polyfilled using this package.
    (Optional) Intl.DisplayNames: Required if you use formatDisplayName or FormattedDisplayName. This can be polyfilled using this package.

If you need to support older browsers, we recommend you do the following:

    Polyfill Intl.NumberFormat with https://github.com/andyearnshaw/Intl.js
    Polyfill Intl.DateTimeFormat with https://github.com/formatjs/date-time-format-timezone

*/

// If you're supporting browsers that do not have Intl.PluralRules (e.g IE11 & Safari 12-), include this polyfill in your build.

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/de'); // Add locale data for de
}

// If you're supporting browsers that do not have Intl.RelativeTimeFormat (e.g IE11, Edge, Safari 12-), include this polyfill in your build along with individual CLDR data for each locale you support.

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Add locale data for de
}

// If you need Intl.DisplayNames, include this polyfill in your build along with individual CLDR data for each locale you support.

if (!Intl.DisplayNames) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/dist/locale-data/de'); // Add locale data for de
}
