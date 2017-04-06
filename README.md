# bluebird-mkdirp [![Build Status](https://secure.travis-ci.org/ds82/tiny-di.svg)](http://travis-ci.org/ds82/tiny-di) [![version](https://img.shields.io/npm/v/bluebird-mkdirp.svg)](https://www.npmjs.com/package/bluebird-mkdirp)

promisify'd version of mkdirp using bluebird and mkdirp as `peerDependencies`.

# Install

// You don't need to install bluebord if your projects already uses a bluebird >= v2

```npm install --save mkdirp bluebird bluebird-mkdirp```

# Usage

```
const mkdirp = require('bluebird-mkdirp');

mkdirp(dir, opts)
  .then(() => { /* done */ })
  .catch((err) => { /* ooops */ })

// opts are directly passed to mkdirp
// see: https://www.npmjs.com/package/mkdirp

```
