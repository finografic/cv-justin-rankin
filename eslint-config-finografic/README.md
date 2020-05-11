# eslint-config-standard [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/standard/eslint-config-standard/master.svg
[travis-url]: https://travis-ci.org/standard/eslint-config-standard
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com)

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Install

This module is for advanced users. You probably want to use [`standard`](http://standardjs.com) instead :)

```bash
npm install --save-dev eslint-config-finografic
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

**If you want to set up the config manually**, run the following command:

```bash
npm install --save-dev eslint-config-finografic
```

Then, add this to your `.eslintrc` file:

```
{
  "extends": "finografic"
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT. Copyright (c) [Justin Rankin](https://github.com/finografic).
