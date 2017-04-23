# bluebird-mkdirp [![Build Status](https://secure.travis-ci.org/ds82/tiny-di.svg)](http://travis-ci.org/ds82/tiny-di) [![version](https://img.shields.io/npm/v/bluebird-mkdirp.svg)](https://www.npmjs.com/package/bluebird-mkdirp)

## deprecation warning

**WARNING**

[![npm version](https://img.shields.io/badge/NPM-deprecated-red.svg)](https://github.com/maxkoryukov/mkdirp-bluebird/issues/2)

This repository and corresponding NPM package are deprecated in favor of [**mkdirp-bluebird**](https://www.npmjs.com/package/mkdirp-bluebird).

Useful links:

1. [NPM package](https://www.npmjs.com/package/mkdirp-bluebird):
    * `npm install -S mkdirp-bluebird`
2. GitHub, `mkdirp-bluebird`:
    * [v2 on master branch](https://github.com/maxkoryukov/mkdirp-bluebird)

----

promisify'd version of mkdirp using bluebird and mkdirp as `peerDependencies`.

# Install

```
// mkdirp and bluebird are peerDependencies. You don't need to install them if you already use them in your projects

npm install --save mkdirp bluebird bluebird-mkdirp
```

# Usage

```
const mkdirp = require('bluebird-mkdirp');

mkdirp(dir, opts)
  .then(() => { /* done */ })
  .catch((err) => { /* ooops */ })

// opts are directly passed to mkdirp
// see: https://www.npmjs.com/package/mkdirp

```
