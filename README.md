[![view on npm](https://img.shields.io/npm/v/lws-static.svg)](https://www.npmjs.org/package/lws-static)
[![npm module downloads](https://img.shields.io/npm/dt/lws-static.svg)](https://www.npmjs.org/package/lws-static)
[![Build Status](https://travis-ci.org/lwsjs/static.svg?branch=master)](https://travis-ci.org/lwsjs/static)
[![Dependency Status](https://david-dm.org/lwsjs/static.svg)](https://david-dm.org/lwsjs/static)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# static

Lws feature wrapper for [koa-static](https://github.com/koajs/static).

Adds these options to `lws`:

```
Middleware

  -d, --directory path     Root directory, defaults to the current directory.
  --static.maxage number   Browser cache max-age in milliseconds.
  --static.defer           If true, serves after `yield next`, allowing any downstream middleware to
                           respond first.
  --static.index path      Default file name, defaults to `index.html`.
```
