Reproducing Issue #176
==

Steps to reproduce [the issue](https://github.com/sindresorhus/grunt-eslint/issues/176)

```
$ git clone https://github.com/codders/grunt-eslint-176
$ cd grunt-eslint-176
$ npm i
$ npm run test
```

The tests fail, regardless of the setting of `ESLINT_USE_FLAT_CONFIG` environment variable.

Installing the previous version of grunt-eslint-176 resolves the issue:

```
$ npm i grunt-eslint@24.3.0
$ npm run test
```
